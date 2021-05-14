var lengthOfLIS = function (nums) {
    let dp = []
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(dp[i], max)
    }
    console.log(dp);
    return max
};

lengthOfLIS([1,3,5,4,7])