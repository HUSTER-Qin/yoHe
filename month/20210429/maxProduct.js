/**
 * @param {number[]} nums
 * @return {number}
 * nums = [-2,1,-3,4,-1,2,1,-5,4]
 */
 var maxProduct = function(nums) {
   let minDp = [nums[0]]
   let maxDp = [nums[0]]
   for (let i = 1; i < nums.length; i++) {
       maxDp[i] = Math.max(maxDp[i-1]* nums[i], Math.max(nums[i],minDp[i-1]*nums[i]))
       minDp[i] = Math.min(minDp[i-1]* nums[i], Math.min(nums[i],maxDp[i-1]*nums[i]))
   }
   console.log(minDp,maxDp);
   return Math.max(...maxDp)
};

console.log(maxProduct([-2,3,-4]));