


/**
 * 什么是柯里化
 * 在一个函数中首先填充几个参数(然后再返回一个新函数)的技术称为柯里化(Currying)。
 * 柯里化又称部分求值，字面意思就是不会立刻求值，而是到了需要的时候再去求值。
 * 其含义是给函数分步传递参数，每次传递参数后部分应用参数，
 * 并返回一个更具体的函数接受剩下的参数，这中间可嵌套多层这样的接受部分参数函数，直至返回最后结果。
 * 特点：提前返回和延迟执行。
 * add(1)(2)(3)
 * @returns
 */

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// function add() {
//     var args = Array.prototype.slice.call(arguments);
//     var fn = function () {
//         var fn_args = Array.prototype.slice.call(arguments);
//         return add.apply(null, args.concat(fn_args));
//     };
//     fn.valueOf = function () {
//         return args.reduce(function (a, b) {
//             return a + b;
//         });
//     };
//     return fn;
// }


// function curry(fn, args) {

//     var length = fn.length;
//     var args = args || [];
//     return function () {
//         newArgs = args.concat(Array.prototype.slice.call(arguments));
//         if (newArgs.length < length) {
//             return curry.call(this, fn, newArgs);
//         } else {
//             return fn.apply(this, newArgs);
//         }
//     }
// }


function curry(fn,args=[]) {
    var length = fn.length
    return function () {
       var newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length < length) {
            return curry.call(null, fn, newArgs)
        } else {
            return fn.apply(null, newArgs)
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}
var multi = curry(multiFn);
console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));


// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function () {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
