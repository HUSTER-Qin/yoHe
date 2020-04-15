/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const t = []
  for (let i = 0; i < s.length; i++) {
    const e = s[i]
    switch (e) {
      case '(':
      case '[':
      case '{':
        t.push(e)
        break
      case ')':
        if (t.pop() !== '(') return false
        break
      case ']':
        if (t.pop() !== '[') return false
        break
      case '}':
        if (t.pop() !== '{') return false
        break
    }
  }
  return !t.length
}
// @lc code=end
