const ab = {
  valueOf() { return 0; },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  },
};
console.log(1 + ab);
console.log(`1${ab}`);
// 拥有 Symbol.toPrimitive 属性的对象
const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      console.log('Number场景');
    }
    if (hint === 'string') {
      console.log('String场景');
    } if (hint === 'default') {
      console.log('Default 场景');
    } return '';
  },
};
console.log(2 * obj); // Number场景 246
console.log(3 + obj); // String场景 3default
console.log(`${obj}`); // Default场景 default
console.log(String(obj)); // String场景 str
