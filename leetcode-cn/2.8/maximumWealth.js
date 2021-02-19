/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = -Infinity;

    for (let i = 0; i<accounts.length; i++) {
        max = Math.max(accounts[i].reduce((a, b) => a + b), max)
    }
    return max

};

maximumWealth([[1, 2, 3], [3, 2, 1]])