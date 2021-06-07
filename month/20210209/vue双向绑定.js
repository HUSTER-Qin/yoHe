
class Dep{

    constructor() {
        this.deps = []
    }
    add(fn) {
        this.deps.push(fn)
    }
    notify() {
        for (const fn of deps) {
            fn()
        }
    }
}

class Watcher{

}

class Observe{
    constructor() {
        
    }
}