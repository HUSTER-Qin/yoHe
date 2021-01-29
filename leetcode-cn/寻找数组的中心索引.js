
let nums = [1, 7, 3, 6, 5, 6]

function findNum(nums) {
    if (nums.length < 3) return
    let sum = nums.reduce((a, b) => a + b)
    let left =0
    for (let index of Object.keys(nums)) {
        if (2 * left + nums[index] === sum) {
            return index
        }
        left += nums[index]
    }
    return -1
}

console.log(findNum(nums));