/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//     let cache = new Map()
//     let help = function (i, n) {
//         if (i > n) {
//             return 0 
//         }
//         if (i === n) {
//             return 1
//         }
//         if (cache.has(i)) {
//             return cache.get(i)
//         }
//         cache.set(i, help(i + 1, n) + help(i + 2, n))
//         return cache.get(i)
//     }

//     return help(0,n)
// };

var climbStairs = function (n) {
    if (n === 1) return n

    let a = 1
    let b = 2
    let c = 0

    for (let i = 3; i <= n; i++) {

        c = a + b
        a = b
        b = c

    }
    return b
}
console.log(climbStairs(2));