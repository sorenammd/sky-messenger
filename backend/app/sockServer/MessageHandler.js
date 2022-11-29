const eventHandler = require('./EventHandler');
eventHandler.$on('newChatRequest', data => {
    eventHandler.$emit('newChatRequest', data);
});
eventHandler.$on('newChatResponse', data => {
    eventHandler.$emit('newChatResponse', data);
});
eventHandler.$on('finishChat', data => {
    eventHandler.$emit('finishChat', data);
});
exports.parseMessage = (message) => {
    const decodedMessage = JSON.parse(message);
    const { event, ...data } = decodedMessage;
    eventHandler.$run(event, data);
};