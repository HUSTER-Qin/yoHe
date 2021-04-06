/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// 输入: N = 4, K = 5
// 输出: 1

// 解释:
// 第一行: 0
// 第二行: 01
// 第三行: 0110
// 第四行: 01101001
var kthGrammar = function (N, K) {

    if (N == 1) return 0;
    let str = ""
    for (let index = 0; index < N-1; index++) {
        if (index === 0) {
           str = "0"
        } else {
            str = str + ~str
       }
        
    }
    return str[K-1]
};

console.log(kthGrammar(4, 5));

