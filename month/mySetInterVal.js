
// 1.写一个 mySetInterVal(fn, a, b), 
// 每次间隔 a, a + b, a + 2b 的时间，
// 然后写一个 myClear，停止上面的 mySetInterVal


class MySetInterVal {
    constructor(fn, a, b) {
        this.count = 0
        this.timer = null
        this.a = a
        this.b = b
        if (fn) {
            this.start(fn, a, b)
        }
    }
    start(fn, a, b) {
        if (this.count > 2) {
            this.stop()
            return
        }
        this.timer = setTimeout(() => {
            this.count++
            fn()
            this.start(fn, a, b)
        }, a + this.count * b);
    }
    stop() {
        clearTimeout(this.timer)
        this.count = 0
    }
}

new MySetInterVal(() => {
    console.log('====');
}, 1000, 2000)
