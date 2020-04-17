/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	// let t = s.trim().split(" ")
	// return t.pop().length
	let len  = 0
	for (let i = s.length-1; i >= 0; i--) {
		if (s[i] != " ") {
			len++
		} else if (len != 0) {
			return len
		}
	}
	return len
};
// @lc code=end

console.log(lengthOfLastWord("Today is a nice day"));
