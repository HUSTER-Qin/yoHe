module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-bitwise": 0,//禁止使用按位运算符
    "no-console": 0,//禁止使用console
    "no-param-reassign": 0,//禁止给参数重新赋值
    "no-plusplus": 0,//禁止使用++，--
  },
};
