
const minSteps = function minSteps(num) {
  if (num === 1) return 0;
  for (let i = 2; i < num / 2; i++) {
    while (num % i === 0) {
      return minSteps(num / i) + i;
    }
  }
  return num;
};

const minSteps2 = function minSteps2(num) {
  let res = 0;
  if (num === 1) return 0;
  for (let i = 2; i <= num;) {
    if (num % i === 0) {
      res += i;
      num /= i;
    } else {
      i++;
    }
  }
  return res;
};
console.log(minSteps(20));
console.log(minSteps2(20));
