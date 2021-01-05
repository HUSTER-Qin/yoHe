/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        let tmp = x % 10;
        res = res * 10 + tmp;
        x = parseInt(x / 10)
    }
    return (res | 0) === res ? res : 0
};
// @lc code=end

