function curry(fn, args = []) {
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

function add(a, b, c) {
    return a + b + c;
}



var add1 = curry(add);
console.log(add1(2)(3)(4));
console.log(add1(2, 3, 4));
console.log(add1(2)(3, 4));
console.log(add1(2, 3)(4));