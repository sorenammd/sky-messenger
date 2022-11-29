const http = require('http');
const sockjs = require('sockjs');
const SockServer = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
require('./messenger')(SockServer);
const httpServer = http.createServer();
module.exports = () => {
    SockServer.installHandlers(httpServer, { prefix: '/socket' });
    httpServer.listen(process.env.SOCK_PORT, '0.0.0.0');
};