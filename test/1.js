
const a = function (str, b) {
  console.log(b);
  str = str.replace(str[1], 'rt');
  return str;
};

console.log(a('abcd', 'er'));
console.log(a.length);
