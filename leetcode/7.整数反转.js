/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const t = String(x).split('').reverse()
  let sys = ''
  if (t[t.length - 1] === '-') {
    sys = t.pop()
  }
  sys = Number(sys + t.join(''))
  if (sys > (Math.pow(2, 31) - 1) || sys < -Math.pow(2, 31)) {
    sys = 0
  }
  return sys
}

// @lc code=end
