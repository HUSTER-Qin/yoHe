/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return ''
  if (strs.length === 1) return strs[0]
  const t = strs.splice(0, 1)[0]
  let i
  for (i = 1; i <= t.length; i++) {
    if (strs.some(item => !item.startsWith(t.substring(0, i)))) {
		  i--
      break
    }
  }
  return i > 0 ? t.substr(0, i) : ''
}
// @lc code=end

console.log(longestCommonPrefix(['flower', 'flow' ,'flowing']));

