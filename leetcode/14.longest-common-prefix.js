/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length < 1) return ""
    let target = ''
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== strs[0][i]) {
                return target
            }
        }
        target += strs[0][i]
    }
    return target
};
// @lc code=end

