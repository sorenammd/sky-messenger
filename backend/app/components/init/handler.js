const tokenService = require('../../services/token');
const OnlineUser = require('@models/mongo/OnlineUser');
const User = require('@models/bookshelf/user');
const axios = require('axios');
const initService = require('./service');
const { buildUserProfile } = require('@services/userService');
exports.init = async (req, res) => {
    const token = tokenService.findToken(req);
    if (!token) {
        return res.status(401).send({
            success: false,
            message: 'unauthorized access!'
        });
    }
    try {
        const { uid } = tokenService.verify(token);
        const user = await User.where({ hash: uid }).fetch().then(user => user);
        const userRecentChats = await initService.fetchRecentChats(uid);
        return res.send({
            success: true,
            me: buildUserProfile(user),
            userRecentChats: userRecentChats
        });


    } catch (error) {
        return res.status(401).send({
            success: false,
            message: 'unauthorized access!'
        });
    }
};

