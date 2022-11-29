const { getAvatarUrl } = require('./gravatar');

exports.buildUserProfile = (user) => {
    return {
        hash: user.attributes.hash,
        name: user.attributes.full_name,
        avatar: getAvatarUrl(user.attributes.email)
    }
};