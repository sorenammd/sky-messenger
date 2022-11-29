const crypto = require('crypto');
const bcrypt = require('bcrypt');
exports.randomHash = (length = 10) => {

    return crypto.randomBytes(length).toString('hex');

};

exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, 8);
};

exports.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};