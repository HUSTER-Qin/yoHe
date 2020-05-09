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
  // const t = String(x).split('').reverse()
  // let sys = ''
  // if (t[t.length - 1] === '-') {
  //   sys = t.pop()
  // }
  // sys = Number(sys + t.join(''))
  // if (sys > (Math.pow(2, 31) - 1) || sys < -Math.pow(2, 31)) {
  //   sys = 0
  // }
  // return sys
  
  let single = ""
  if(x<0) single = '-'
  x = Math.abs(x)
  let y = 0
  while (x != 0) {
    y = y * 10 + x%10
    x = Math.floor(x / 10)
  }
  if (y > (Math.pow(2, 31) - 1) || y < -Math.pow(2, 31)) {
    return 0
  }
  return Number(single + y)
}

// @lc code=end
console.log(reverse(-123));