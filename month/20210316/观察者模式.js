
// 观察者
class Observer{
    constructor() {
        
    }

    update() {
        
    }
}

// 观察者列表
class ObserverList{
    constructor() {
        this.observerList = []
    }
    add(observer) {
        this.observerList.push(observer)
    }
    remove(observer) {
        this.observerList = this.observerList.filter(item=>item!=observer)
    }
    count() {
        return this.observerList.length
    }
    get(index) {
        return this.observerList[index]
    }
}

// 目标
class Subject{
    constructor() {
        this.observers = new ObserverList()
    }

    addObserver(observer) {
        this.observers.add(observer)
    }
    removeObserver(observer) {
        this.observers.remove(observer)
    }
    notify(...args) {
        let count = this.observers.count()
        for (let i = 0; i < count; i++) {
            this.observers.get(i).update(...args)            
        }
    }
}