/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//  输入：coins = [1, 2, 5], amount = 11
//  输出：3 
//  解释：11 = 5 + 5 + 1
 var coinChange = function(coins, amount) {
    
    if(coins.length===0) return 0

    let dp = Array.from({length:amount+1}, ()=> Infinity)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {

        for (const coin of coins) {
            if(i - coin >= 0){
                dp[i] = Math.min(dp[i],dp[i-coin] + 1);
            }
        }
        
    }
    return dp[amount]!=Infinity ? dp[amount] : -1
};

console.log(coinChange([1, 2, 5], 11));