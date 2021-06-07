
// arr.reduce(function(prev, cur, index, arr){}, initialValue)

Array.prototype.myReduce = function (callback, init) {
   
    let [value, index] = init ? [init, 0] : [this[0], 1]
    for (let i = index; i < this.length; i++) {
      value =  callback(value, this[i], i, this)
        
    }
    return val
}

console.log([2, 2, 3, 4, 5].reduce((pre, item) => pre + item, 0)) // 15