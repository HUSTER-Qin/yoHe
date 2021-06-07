/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let dp = [nums[0]]
    let max = dp[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        max = Math.max(dp[i], max)
    }
    return max
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])