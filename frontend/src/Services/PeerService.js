import Peer from 'peerjs';

class PeerService {
    constructor() {
        this.peer = null;
        this.client = null;
        this.connection = null;
    }
    setClient(client) {
        this.client = client;
    }
    init() {
        this.peer = new Peer(this.client.getClientID(), {
            port:9000,
            key: 'messenger',
            path: '/messenger',
            host: '/'
        });
        return this.peer;
    }
    connect(clientID) {
        this.connection = this.peer.connect(clientID);
        return this.connection;
    }
}
export default PeerService;
