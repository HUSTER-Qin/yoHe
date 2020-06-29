/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

const { ifError } = require("assert");

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let sArr = s.split("")
    let map = {}
    sArr.map((val, i) => {
        if (!map[val]) {
            map[val] = 0
        } 
        map[val]++
    })
    for (let i = 0; i < sArr.length; i++) {
        if (map[sArr[i]] === 1) {
            return i
        }  
    }
    return -1
};
// @lc code=end

