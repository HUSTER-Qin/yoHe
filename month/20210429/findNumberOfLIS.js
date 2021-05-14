function findNumberOfLIS(nums) {

    let dp = []
    let count = Array.from({
        length: nums.length
    }, () => 1)
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                } else if (dp[i] == dp[j] + 1) {
                    count[i] += count[j] + count[i]
                }

            }
        }

    }
    let max = Math.max(...dp)
    console.log(max);
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === max) {
            ans += count[i]
        }

    }
    console.log(ans, dp, count);
    return ans
}
// [1,3,5,4,7]

findNumberOfLIS([100, 90, 80, 70, 60, 50, 60, 70, 80, 90, 100])