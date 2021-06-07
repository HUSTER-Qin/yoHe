class Observer {
    constructor() {
        this.events = {}//事件中心
    }
    publish(eventName, ...args) {//发布=>调用事件中心中对应的函数
        if (this.events[eventName])
            this.events[eventName].forEach(cb => cb.apply(this, args))
    }
    subscribe(eventName, callback) {//订阅=>向事件中心中添加事件
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }
    }
    unSubscribe(eventName, callback) {//取消订阅
        if (events[eventName])
            events[eventName] = events[eventName].filter(cb => cb !== callback)
    }
}