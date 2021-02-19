/**
 * JSON拷贝方法
 * 1. 函数无法输出
 * 2. 正则不输出
 * 3. 时间对象（输出字符串）
 * 4. undefined不输出
 * 5. 循环引用
 * 
 * @param {*} target 
 * @returns
 */

const deepClone = function (target) {
  if (Array.isArray(target)) {
    let _a = [];
    for (const value of target) {
      _a.push(deepClone(value));
    }
    return _a;
  } else if ( target instanceof Object) {
    let _o = {};
    for (const key of Object.keys(target)) {
      _o[key] = deepClone(target[key]);
    }
    return _o;
  } else {
    return target;
  }
};

var arr = [
  1,
  2,
  3,
    {
      z:arr,
      a: 123,
      b:NaN,
      e:null,
      c: Date('2021'),
      f: undefined,
      d: function () {
          
      }
  },
];

let b = deepClone(arr);
console.log(b);

