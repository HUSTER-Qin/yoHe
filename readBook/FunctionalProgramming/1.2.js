// import { runInContext } from "vm";

// /**
//  * 命令式编程
//  */
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < array.length; i++) {
//     array[i] = Math.pow(array[i],2)
// }
// console.log(array);


// array.map(num => Math.pow(array[i], 2))


// function multiplier(a,b) {
//     return a*b
// }

// let multiplier = function (a, b) {
//     return a * b
// }

// let multiplier = (a, b) => a * b

// let multiplier = new Function('a', 'b', 'return a*b')


// function applyOperation(a,b,opt) {
//     return opt(a,b)
// }

var arr = [1, 2, 3, 4]

function processArr() {
    function multipleBy10(val) {
        i = 10
        return i * val
    }
    debugger
    for (var i = 0; i < arr.length; i++) {
        arr[i] = multipleBy10(arr[i])
        
    }
    return arr
}

console.log(processArr());


var myModule = (function (ex) {
    let _privateVar = '私有变量'

    ex.method = function () {
        
    }
}) (myModule||{})