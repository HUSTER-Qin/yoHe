// 子串的模式匹配
const STR = require('./Str');

const strIndex = function (s, t) {
  if (STR.isString(s) && STR.isString(t)) {
    const sLen = STR.strLength(s);
    const tLen = STR.strLength(t);
    if (tLen > sLen) return 0;
    let i = 0; let j = 0;
    while (i < sLen && j < tLen) {
      if (s[i] === t[j]) {
        ++i;
        ++j;
      } else {
        i = i - j + 1;
        j = 0;
      }
    }
    if (j === tLen) return sLen - j;
  }
  return 0;
};

console.log(strIndex('hdalo', 'alo'));
