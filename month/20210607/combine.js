

// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
//     [2, 4],
//     [3, 4],
//     [2, 3],
//     [1, 2],
//     [1, 3],
//     [1, 4],
// ]
function combine(n, k) {
    
    let result = []
    let target  = []
    const help = function (index) {
        if (target.length <= k) {
            let a = target.slice()
            result.push(a)
        
        }
        for (let i = index; i <= n; i++) {
            target.push(i)
            help(i+1,k)
            target.pop()
        }
    }
    help(1)
    return result
}
console.log(combine(4, 2));