/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x < 2) return x
	let right = x/2
	let left = 2
	let t = 0
	let num;
	while (left <= right) {
		t = Math.floor(left + (right - left) / 2)
		num = (t * t)
		if (num > x) right = t - 1
		else if (num < x) left = t + 1
		else return (t)
	}
	return Math.floor(right)
};
// @lc code=end
// console.log(mySqrt(9));
console.log(mySqrt(6));


