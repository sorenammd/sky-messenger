const crypto = require('crypto');
exports.getAvatarUrl = (email, size = 80) => {
    const hash = crypto.createHash('md5').update(email).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=mp&r=g`;
};