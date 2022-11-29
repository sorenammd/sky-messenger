const express = require('express');
const chatRouter = express.Router();
const chatHandler = require('./handler');

chatRouter.post('/', chatHandler.init);
chatRouter.post('/messages', chatHandler.saveMessage);
chatRouter.post('/finish', chatHandler.finishChat);
chatRouter.post('/recent', chatHandler.fetchRecent);


module.exports = chatRouter;