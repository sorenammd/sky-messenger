const express = require('express');
const meRouter = express.Router();
const meHandler = require('./handler');

meRouter.post('/details', meHandler.getDetails);


module.exports = meRouter;