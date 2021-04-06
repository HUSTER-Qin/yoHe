/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    for (let i = 0; i < Math.floor((nums.length)/2); i++) {
        let min = i
        let max = i
        for (let j = i; j < nums.length-i; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
            if (nums[j] > nums[max]) {
                max = j
            }
        }
        if (min === max) break;
        [nums[i], nums[min]] = [nums[min], nums[i]]
        if (max == i) max = min;
        [nums[nums.length-1-i], nums[max]] = [nums[max], nums[nums.length-1-i]]

    }
    return nums
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));