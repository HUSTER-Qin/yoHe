/**
 * 跳台阶问题
 * n个台阶
 * 第一次跳一个台阶 f(n-1)
 * 第一次跳两个台阶 f(n-2)
 * @param n
 */
const jumpFloor = function jumpFloor(n) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  return jumpFloor(n - 1) + jumpFloor(n - 2);
};

console.log(jumpFloor(4));

const jumpFloor2 = function jumpFloor2(n) {
  if (n <= 0) return 0;
  if (n <= 2) return n;
  let f = 1; // 次数
  let g = 1; // 当前状态
  while (n--) {
    // 上一状态决定 下一个状态
    g += f;
    // 保留上一状态
    f = g - f;
  }
  return f;
};

console.log(jumpFloor2(8));

// 变态跳台阶
// 题目描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级，。。。，它也可以跳上n级，求该青蛙跳上一个n级的台阶总共有多少种方法？
// f(n) = 0 n=0 1 n=1 2*f(n-1) n>=2
const jumpFloor3 = function jumpFloor3(n) {
  if (n <= 0) return n;
  if (n === 1) return 1;
  let f = 1;
  while (n-- > 2) {
    f *= 2;
  }
  return f;
};

console.log(jumpFloor3(8));
