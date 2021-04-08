/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        j = i
        while (j > 0 && nums[j] < nums[j - 1]) {
            [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
            j--
        }
        
    }
    return nums
};

sortArray([5, 1, 1, 2, 0, 0])