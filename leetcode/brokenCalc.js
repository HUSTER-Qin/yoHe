/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
// 在显示着数字的坏计算器上，我们可以执行以下两种操作：
//
// 双倍（Double）：将显示屏上的数字乘 2；
// 递减（Decrement）：将显示屏上的数字减 1 。
// 最初，计算器显示数字X。
// 返回显示数字Y所需的最小操作数
// X = 3, Y = 10
//    12 6
const brokenCalc = function (x, y) {
  let ans = 0;
  while (y > x) {
    ans++;
    y & 1 ? y++ : y >>= 1;
  }
  return ans + x - y;
};

console.log(brokenCalc(3, 10));
