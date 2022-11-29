const bookshelf = require('../../connections/bookshelf');
const User = bookshelf.model('User', {
    tableName: 'users',
    hidden: ['password']
});

module.exports = User;