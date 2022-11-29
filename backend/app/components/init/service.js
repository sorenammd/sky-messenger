const Chat = require('@models/mongo/Chat');
exports.fetchRecentChats = async (userHash, limit = 10) => {
    const recentChats = await Chat.find(
        {
            participants: {
                $elemMatch: {
                    hash: userHash
                }
            }
        }, { messages: { $slice: -1 } }, { limit }).exec();

    if (recentChats) {
        return recentChats.map(recentChat => {
            const newRecentChat = recentChat.toJSON();
            const index = newRecentChat.participants.findIndex(item => item.hash !== userHash);
            newRecentChat.user = newRecentChat.participants[index];
            delete newRecentChat['participants'];
            newRecentChat.lastMessage = newRecentChat.messages.length > 0 ? newRecentChat.messages.pop() : null;
            delete newRecentChat['messages'];
            return newRecentChat;
        });
    };
    return [];
};