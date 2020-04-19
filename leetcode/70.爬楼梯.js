/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	// let sum = 0
	// const fun = function (n) {
	// 	if (n == 1||n==2) {
	// 		return n
	// 	}
	// 	return fun(n-1) +  fun(n-2)
	// }
	// sum += fun(n-1) +  fun(n-2)
	// return sum
	if (n < 0) {
		return -1
	}
	if (n == 1 || n == 2) {
		return n
	}
	let a = 1
	let b = 2
	let sum = 0
	for (let i = 2; i < n; i++) {
		sum = a + b
		a = b
		b= sum
		
	}
	return sum

};
// @lc code=end
console.log(climbStairs(5));


