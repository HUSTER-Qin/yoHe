/**
 * @param {number[]} nums
 * @return {number}
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 */
 var maxSubArray = function(nums) {
    let len = nums.length
   let sum = nums[0]
    let max = nums[0]
    for (let i = 1; i < len; i++) {
        if(sum>0) {
            sum *= nums[i]
        }else{
            sum = nums[i]
        }
        max = Math.max(sum, max)
       
    }
    console.log(max);
    return max
};

console.log(maxSubArray([-2,0,-1]));