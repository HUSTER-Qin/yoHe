/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字1和0。
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = function (a, b) {
  let temp = '';
  let res = '';
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || temp; i--, j--) {
    temp += ~~a[i] + ~~b[j];
    res = String(temp % 2) + res;
    temp = temp > 1;
  }
  return res;
};
console.log(addBinary('1010', '1011'));
