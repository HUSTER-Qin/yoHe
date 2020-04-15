/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || x.length < 3 || x.length % 2 == 0) {
    return false
  }
  return Number(String(x).split('').reverse().join('')) === x
}
// @lc code=end
