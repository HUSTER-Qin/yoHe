/**
 * @param {number[]} prices
 * @return {number}
 */
// [7,1,5,3,6,4]
var maxProfit = function (prices) {
    let dp = [prices[0]]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i-1], prices[i])   
        max = Math.max(max, prices[i] - dp[i])
        
    }
    console.log(max);
    return max
};

maxProfit([7, 6, 4, 3, 1])