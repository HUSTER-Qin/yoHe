/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let arr = Array.from(height).sort((a, b) => a - b)
	console.log(arr);
	console.log(height);
	
	let m1 = height.findIndex(item=>item === arr[arr.length-1])
	let m2 = height.findIndex(item=>item === arr[arr.length-2])
	return arr[arr.length-2]*Math.abs((m1-m2))
};
// @lc code=end

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
