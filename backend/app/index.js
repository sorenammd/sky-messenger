const express = require('express');
const PeerServer = require('./peer');
const app = express();

require('./routes')(app);
PeerServer.on('connection', client => {
    console.log({ client });
});

module.exports = () => {
    app.listen(process.env.APP_PORT, () => {
        console.log('server is running ....');
    });
};