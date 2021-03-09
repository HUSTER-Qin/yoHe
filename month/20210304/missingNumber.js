/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let left = 0;
    let right = nums.length - 1
    
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)

        if (nums[mid] === mid) {
            left = mid+1
        } else {
            right = mid -1
        }
    }
    console.log(left);
    return left
};

missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])
