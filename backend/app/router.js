const { auth } = require('./middlewares/auth');
const authRouter = require('./components/auth/router');
const initRouter = require('./components/init/router');
const meRouter = require('./components/me/router');
const chatRouter = require('./components/chat/router');
module.exports = (app) => {

    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/init', initRouter);
    app.use('/api/v1/me', meRouter);
    app.use('/api/v1/chat', auth, chatRouter);

};