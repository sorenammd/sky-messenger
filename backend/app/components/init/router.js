const express = require('express');
const initRouter = express.Router();
const initHandler = require('./handler');

initRouter.post('/', initHandler.init);


module.exports = initRouter;