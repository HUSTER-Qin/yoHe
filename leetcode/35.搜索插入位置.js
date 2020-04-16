/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
// 	if (nums.includes(target)) {
// 		return nums.indexOf(target)
// 	}
// 	for (let index = 0; index < nums.length; index++) {
// 		if (target <= nums[index]) {
// 			// nums.splice(index, 0, target)
// 			return index
// 		}
// 	}
// 	return nums.length

// };
var searchInsert = function (nums, target) {
	if (nums.includes(target)) {
		return nums.indexOf(target)
	}
	// for (let index = 0; index < nums.length; index++) {
	// 	if (target <= nums[index]) {
	// 		// nums.splice(index, 0, target)
	// 		return index
	// 	}
	// }
	let i = 0
	let low = 0
	let hight = nums.length - 1	
	while (low <= hight) {
		if (target == nums[i]) return i;
		i = Math.ceil((low + hight) / 2)
		if (nums[i] > target) {
			hight = i-1
		} else {
			low = i+1
		}

	}
	return  target>nums[i] ? i+1 : i;

};
// @lc code=end

console.log(searchInsert([1, 3, 5, 7], 12));

