class ClientService {
    setCurrentClient(me) {
        this.me = me;
    }
    getClientID() {
        return this.me.hash;
    }

}

export default ClientService;