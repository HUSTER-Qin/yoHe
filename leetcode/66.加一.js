/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	// for (let index = digits.length-1; index>=0; index--) {
	// 	let num = digits[index]
	// 	if (num < 9) {
	// 		digits[index] = digits[index] + 1
	// 		return  digits
	// 	} else {
	// 		digits[index]  = 0
	// 	}
		
	// }
	// if (digits[0] === 0) {
	// 	digits.unshift(1)
	// }
	// return digits
	let temp = 1
	let res = ""
	while (digits.length|| temp) {
		temp += ~~digits.pop();
		res = (temp % 10) + res;
		temp = temp > 9;
	}
	return res.split("")
};
// @lc code=end
console.log(plusOne([9]));

