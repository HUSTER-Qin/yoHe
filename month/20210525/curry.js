

function curry(fn, ...arg) {
    let len = fn.length
    return function (...arg1) {
        let args = arg.concat(arg1)
        if (args.length < len) {
            return curry.call(null, fn, ...args)
        } else {
            return fn.apply(null,args)
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