/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let res = 0
    let target = x;
    while (target!==0) {
        let tmp = target % 10
        res = res * 10 + tmp;
        target = parseInt(target/10)
    }
    return res===x
};
// @lc code=end

