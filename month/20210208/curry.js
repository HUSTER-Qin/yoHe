const curry = function (fn, args = []) {
  let len = fn.length;
  return function () {
    var nArgs = args.concat(Array.prototype.slice.call(arguments));
    if (nArgs.length >= len) {
      return fn.apply(null, nArgs);
    } else {
      return curry.call(null, fn, nArgs);
    }
  };
};

const add = function (a, b, c) {
  return a + b + c;
};
// add(1, 2, 3)

let add1 = curry(add);
let b = add1(1)(2)(3);
console.log(b);
