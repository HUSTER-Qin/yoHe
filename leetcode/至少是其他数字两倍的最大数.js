/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
	let maxIndex = 0
	let firstMax = 0
	let secondMax = 0
	
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > firstMax) {
			secondMax = firstMax
			firstMax = nums[i]
			maxIndex = i
		} else if (nums[i] > secondMax) {
			secondMax = nums[i]
		}
		
	}
	return firstMax>= secondMax*2 ? maxIndex : -1

};
console.log(dominantIndex([3, 6, 1, 0]));
