
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     if(n<2) return n
//     return fib(n-1)+ fib(n-2)
// };

var fib = function(n) {
   let  cache = new Map()
    const help = function (n) {
        if (n < 2) return n
        if (cache.has(n)) {
            return cache.get(n)
        }
        let r = help(n - 1) + help(n - 2)
        cache.set(n, r)
        return r
    }
    return help(n)
};

console.log(fib(5));