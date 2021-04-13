/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = 0
    let map  = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i],"")
        }
    }
    return map.size !== nums.length
};

console.log(containsDuplicate([1,2,3,4]));