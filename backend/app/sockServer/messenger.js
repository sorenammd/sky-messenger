const clientManager = require('./ClientManager');
const { parseMessage } = require('./MessageHandler');
const onError = (err) => { console.log('error in sockjs connection', err); };
module.exports = (SockConnection) => {
    SockConnection.on('connection', connection => {
        clientManager.addClient(connection);
        connection.on('close', () => {
            clientManager.removeClient(connection);
        });
        connection.on('data', parseMessage);
        connection.on('error', onError);

    });
};