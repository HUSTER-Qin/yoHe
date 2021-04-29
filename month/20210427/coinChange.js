
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {

    const help = function(n){
        if (n == 0) return 0
        if (n < 0)return -1
        let res = Infinity
        let subproblem = null
        for (let i = 0; i < coins.length; i++) {
            subproblem =  help(n-coins[i])
             if(subproblem===-1) continue
             res = Math.min(res,1+subproblem)
            
        }
        return res!=Infinity ? res :-1
    }

    return help(amount)

};

console.log(coinChange([1, 2, 5],11));