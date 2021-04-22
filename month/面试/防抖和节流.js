

// 连续执行 只会执行一次
const debounce = function (fn, time) {
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(fn, time);
    }
}

// 节流： 一段时间内  执行一次
const throttle = function (fn, time) {
    let timer = null

    return function () {
        if (timer) return
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn()
        }, time)
       
    }
}



