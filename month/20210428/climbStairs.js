/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if(n<2) return n
    dp = [1,2]
    for (let i = 2; i < n; i++) {
       dp[i] = dp[i-1] + dp[i-2]    
    }
    return dp[dp.length-1]
};

console.log(climbStairs(3));