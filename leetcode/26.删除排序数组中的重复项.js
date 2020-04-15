/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1
  while (nums[i] !== undefined) {
    if (nums[i - 1] !== nums[i]) {
      i++
    } else {
      nums.splice(i, 1)
    }
  }
  return nums.length
}
// @lc code=end
console.log(removeDuplicates([1,1,2]))
