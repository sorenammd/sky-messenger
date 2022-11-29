const express = require('express');
const authRouter = express.Router();
const authHandler = require('./handler');

authRouter.post('/register', authHandler.register);
authRouter.post('/login', authHandler.login);


module.exports = authRouter;