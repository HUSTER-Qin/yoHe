
class Publish{
    constructor() {
        this.subscriber = []
    }

    subscribe(type, fn) {
        if (!Object.prototype.hasOwnProperty.call(this.subscriber, type)) {
            this.subscriber = []
        }
        this.subscriber[type].push(fn)
    }

    unSubscribe(type, fn) {
        let listener = this.subscriber[type]
        if (!listener || !listener.length) return
        
        this.subscriber[type] = this.subscriber.filter(sub=> sub!==fn)
    }

    publish(type, ...args) {
        let listener = this.subscriber[type]
        if (!listener || !listener.length) return

        listener.forEach(fn=> fn(...args));
    }
}