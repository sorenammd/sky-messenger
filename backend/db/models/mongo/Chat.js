const { Schema, model } = require('mongoose');
const MessageSchema = require('./Message');
const chatSchema = new Schema({
    participants: {
        type: Schema.Types.Mixed,
        required: true,
    },
    messages: {
        type: [MessageSchema],
        default: null
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    is_finished: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    collection: 'chats'
});
const Chat = model('Chat', chatSchema);
module.exports = Chat;