

const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class MyPromise{
    constructor(fn) {
        this.value = null
        this.status = PENDING
        this.fulfilledCallbacks = []
        this.rejectedCallbacks = []

        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        // fn
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
        }
        this.fulfilledCallbacks.forEach(fn=>fn(this.value))
    }

    reject(value) {
        // 
        if (this.status === PENDING) {
            this.status = REJECTED
            this.value = value
        }
        this.rejectedCallbacks.forEach(fn=>fn(this.value))
    }
    then(onFulfilled, onRejected) {
        if (this.status === PENDING) {
            onFulfilled&&this.fulfilledCallbacks.push(() => { onFulfilled(this.value)})
            onFulfilled&&this.rejectedCallbacks.push(() => { onRejected(this.value)})
        }
        if (this.status === FULFILLED && onFulfilled) {
            onFulfilled(this.value)
        }

        if (this.status === REJECTED && onRejected) {
            onRejected(this.value) 
        }
        return this;
    }

}



let m = new MyPromise((resolve, reject) => {
    console.log(123);
    resolve(456)
}).then(res => {
    console.log(res);
})
console.log(m);