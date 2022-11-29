const { Schema, model } = require('mongoose');
const onlineUsersSchema = new Schema({
    user: Schema.Types.Mixed,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    }
}, {
    collection: 'online_users'
});
onlineUsersSchema.index({ location: "2dsphere" });
const OnlineUser = model('OnlineUsers', onlineUsersSchema);
module.exports = OnlineUser;