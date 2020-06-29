/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let strArr = str.split(" ")
    let paArr = pattern.split("")
    if (strArr.length != paArr.length) return false
    let len = str.length
    let map = new Map()
    for (let i = 0; i < len; i++) {
      
        if (map.has(paArr[i])) {
            if (map.get(strArr[i]) !== paArr[i]) {
                return false
            }
        }
        map.set(strArr[i],paArr[i] )
    }

    return true
};
// @lc code=end

