const { Schema } = require('mongoose');
const messageSchema = new Schema({
    sender: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        default: 'text'
    },
    content: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    }
});
module.exports = messageSchema;