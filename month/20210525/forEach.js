Array.prototype.myForEach = function (fn, temp_this) {
    for (let i = 0, len = this.length; i < len; i++) {
        fn.call(temp_this, this[i], i, this)//循环数组元素,为回调函数传入参数
    }
}

console.log(Array);
let a = [1, 3, 5, 7, 9]
a.myForEach(function (item, index, arr) {
    console.log(this);
    console.log(item, index, arr)
}, 15)