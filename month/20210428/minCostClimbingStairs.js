/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function (cost) {

//     let dp = [0,0]

//     for (let i = 2; i <= cost.length; i++) {
//         dp[i] = Math.min(dp[i-1]+ cost[i-1], dp[i-2]+cost[i-2])
        
//     }
//     console.log(dp);
//     return dp[cost.length-1]
// };

var minCostClimbingStairs = function (cost) {
    let len = cost.length
    let dp = [cost[0], cost[1]]
    for (let i = 2; i < len; i++) {
        // 当爬第 ii 个阶梯时，有可能是从第 i - 1i−1 个阶梯爬上来的（选择只爬一层），此时状态转移方程（即需要消耗的体力）：dp[i] = dp[i - 1] + cost[i]；

        // 也有可能是从第 i−2 个阶梯爬上来的（选择爬两层），此时状态转移方程（即需要消耗的体力）：dp[i] = dp[i - 2] + cost[i]；

      
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }
    console.log(dp);
    // 因为第 n - 2n−2 阶楼梯再走两步就到头了；第 n - 1n−1 阶楼梯再走一步就到头了。所以，返回时要选择两种情况中花费较少的那一种情况。
    return Math.min(dp[len- 2], dp[len - 1])
};

console.log(minCostClimbingStairs([10, 15, 20]));

/**
 * @param {number[]} cost
 * @return {number}
 */
