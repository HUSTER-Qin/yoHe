// 参考资料
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
const a = {};
Object.defineProperty(a, 'key', {
  configurable: true, // 是否能被修改  默认false
  enumerable: true, // 是否能被枚举 默认false
  writable: true, // 为true 时 value能被赋值运算符    默认false
  // value 值 不能与set、get共存
  set(x) {
    console.log(`object-${x}`);
    return x;
  },
  get() {
    console.log('object');
  },
});
