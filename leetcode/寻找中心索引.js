/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
	let left = 0
	let right = nums.reduce((pre, cur)=> {
		return pre+ cur
	})
	for (let i = 0; i < nums.length; i++) {
		if (left === right - nums[i] - left) {
			return i
		}
		left += nums[i]
		
	}
	return -1
   
};
console.log(pivotIndex([-1,-1,-1,-1,-1,-1]));
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));