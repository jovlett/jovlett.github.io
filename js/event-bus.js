class EventBusSingleton {
    constructor() {
        if (!EventBusSingleton.instance) {
            this.events = {};
            EventBusSingleton.instance = this;
        }
  
        return EventBusSingleton.instance;
    }
  
    $emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args));
        }
    }
  
    $on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
  
    $off(event, callback) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
}

const EventBus = new EventBusSingleton();
export default EventBus;