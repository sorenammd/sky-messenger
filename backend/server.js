require('module-alias/register');
require('dotenv').config();
const startApp = require('./app/app');
const startSockServer = require('./app/sockServer');
startApp();
startSockServer();