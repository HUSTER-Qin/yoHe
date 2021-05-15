/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    if (nums.length <= 0) return
    let sums = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        sums[i] = nums[i] + sums[i - 1]
    }

    this.sums = sums
    return this
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) return this.sums[right]
    return this.sums[right] - this.sums[left-1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(2, 5)
console.log(obj);
console.log(param_1);