
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

namespace myTwoSum{
export 	const twoSum = function name (nums: number[], target: number): number[]{
		let  map = new Map<number, number>()
		for (let i = 0; i < nums.length; i++) {
			let num = target - nums[i]
			let a = map.get(num) 
			if (a!== undefined) {
				return [a,i]
			} else {
				map.set(nums[i], i)
			}			
		}
		return []
	}
}

console.log(myTwoSum.twoSum([2, 7, 11, 15], 9));
