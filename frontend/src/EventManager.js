class EventManager {
    constructor() {
        this.events = {};
    };
    on(event, callback) {
        this.events[event] = callback;
    }
    fire(event, ...data) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event](...data);
        }
    }
}
export default EventManager;