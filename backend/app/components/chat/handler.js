const tokenService = require('../../services/token');
const Chat = require('@models/mongo/Chat');
const User = require('@models/bookshelf/user');
const userService = require('@services/userService');

exports.init = async (req, res) => {

    const token = tokenService.findToken(req);
    const tokenPayload = tokenService.verify(token);
    const userHash = tokenPayload.uid;
    const participantHash = req.body.participant;

    const user = await User.where({ hash: userHash }).fetch();
    const participant = await User.where({ hash: participantHash }).fetch();
    if (!user || !participant) {
        return res.send({
            success: false,
            message: 'اطلاعات کاربران ارسال شده صحیح نمی باشد.'
        });
    }
    let chat = await Chat.findOne({
        participants: { $elemMatch: { hash: userHash } }
        , is_finished: false
    }).exec();
    const userProfile = userService.buildUserProfile(user);
    const participantProfile = userService.buildUserProfile(participant);
    if (!chat) {
        chat = await Chat.create({
            participants: [
                {
                    hash: userHash,
                    details: userProfile
                },
                {
                    hash: participantHash,
                    details: participantProfile
                }
            ]
        });
    }

    if (chat) {
        return res.send({
            success: true,
            chat: {
                id: chat._id,
                participants: {
                    [userHash]: userProfile,
                    [participantHash]: participantProfile
                }
            }
        });
    }
    return res.send({
        success: false,
        message: 'در حال حاضر سیستم قادر به ایجاد گفتگوی جدید نمی باشد.'
    });
};
exports.saveMessage = async (req, res) => {
    const { body, sender } = req.body;
    let chat = await Chat.findOne({
        participants: {
            $elemMatch: { hash: sender }
        },
        is_finished: false
    }).exec();
    if (!chat) {
        return res.status(422).send({
            success: false,
            message: 'گفتگویی با این مشخصات در سیستم وجود ندارد'
        });
    }
    await chat.messages.push({ sender, content: body });
    await chat.save((err, result) => { });
    return res.send({
        success: true,
        message: 'پیام با موفقیت ذخیره گردید'
    });
};
exports.finishChat = async (req, res) => {
    const { chatID } = req.body;
    let chat = await Chat.findOne({ _id: chatID }).exec();
    if (chat && chat.is_finished) {
        return res.send({
            success: true,
            message: 'گفتگو قبلا به پایان رسیده است'
        });
    }
    if (!chat) {
        return res.status(422).send({
            success: false,
            message: 'گفتگویی با این مشخصات در سیستم وجود ندارد'
        });
    }
    chat.is_finished = true;
    await chat.save((err, result) => { });
    return res.send({
        success: true,
        message: 'گفتگو با موفقیت به پایان رسید'
    });
};
exports.fetchRecent = async (req, res) => {
    const { chatID } = req.body;
    let chat = await Chat.findOne({ _id: chatID }, { messages: { $slice: -50 } }).exec();
    if (!chat) {
        return res.send({
            success: false,
            message: 'گتفگویی با این مشخصات در سیستم وجود ندارد'
        });
    }
    const chatParticipants = {};
    chat.participants.forEach(pr => {
        chatParticipants[pr.hash] = { ...pr.details };
    });
    return res.send({
        success: true,
        chat: {
            currentChat: {
                id: chatID,
                participants: chatParticipants,
                is_finished: chat.is_finished
            },
            currentChatMessages: chat.messages.map(message => {
                return {
                    body: message.content,
                    created_at: message.created_at,
                    sender: message.sender
                };
            })
        }
    });
};