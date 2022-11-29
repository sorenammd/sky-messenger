import * as SockJS from 'sockjs-client';
class SockClient {
    constructor() {
        this.client = null;
        this.connection = null;
        this.events = {};
        this.messageHandler = this.messageHandler.bind(this);
    }
    setClient(client) {
        this.client = client;
    }
    connect() {
        this.connection = new SockJS(`http://localhost:8000/socket?hash=${this.client.getClientID()}`);
        this.connection.onmessage = this.messageHandler;
    }
    messageHandler(e) {
        const { event, ...data } = JSON.parse(e.data);
        if (this.events && this.events.hasOwnProperty(event)) {
            this.events[event](data);
        }
    }
    $on(event, handler) {
        this.events[event] = handler;
    }
    $emit(event, data) {
        return this.connection.send(JSON.stringify({ event, ...data }));
    }
}
export default SockClient;