const User = require('../../../db/models/bookshelf/user');
const { hashPassword, comparePassword } = require('../../services/hash');
exports.register = async (params) => {

    params.password = hashPassword(params.password);

    const user = await User.forge(params).save();

    return user;

};

exports.login = async (email, password) => {

    const user = await User.where({ email }).fetch();
    if (!user) {
        return false;
    }
    if (comparePassword(password, user.attributes.password)) {
        return user.attributes;
    }
    return false;

};
