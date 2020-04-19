/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i+1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) {
	// 			return [i,j]
	// 			break
	// 		}
			
	// 	}
		
	// }
	let m = new Map()
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		if (m.has(diff)) {
			return [m.get(diff), i]
		}
		m.set(nums[i],i)
	}
};
// @lc code=end

console.log(twoSum([2,7,11,15],9));

