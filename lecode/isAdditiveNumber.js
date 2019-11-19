
const sumBigNumber = function sumBigNumber(a, b) {
  let res = '';
  let temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    // ~~ 不会因为 undefined 出现NaN
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
};
/**
 * 112358 累加序列
 * @param {string} num
 * @return {boolean}
 * 确定一个个累加值之后 一直递归处理
 */

const isAdditiveNumber = function additiveNumber(num) {
  if (num.length < 2) return false;
  const len = num.length;
  for (let i = 1; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let str1 = num.slice(0, i);
      let str2 = num.slice(i, j);
      let s = num.slice(j);
      // eslint-disable-next-line no-mixed-operators
      if (str1.length > 0 && str1[0] === '0' || str2.length > 0 && str2[0] === '0') {
        continue;
      } else {
        let sum = sumBigNumber(str1, str2);
        while (s.indexOf(sum) === 0 && s.length !== 0) {
          //  新的累加
          str1 = str2;
          str2 = sum;
          sum = sumBigNumber(str1, str2);
          // 在原来的基础上后移 最大串
          s = s.slice(str2.length);
        }
        if (s.length === 0) {
          return true;
        }
      }
    }
  }
  return false;
};

const is = isAdditiveNumber('101');
console.log(is);
