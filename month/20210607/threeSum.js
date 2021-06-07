/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target=0) {
    nums = nums.sort((a, b) => a - b)
    
   
    let result = []
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let start = i + 1;
        let end = nums.length - 1
      
        while (start < end) {
              console.log(nums[i] , nums[start] , nums[end]);
            if (nums[i] + nums[start] + nums[end] === target) {
                result.push([nums[i], nums[start], nums[end]])
                start++
                end--
                while (start<end&&nums[start]===nums[start-1]) {
                    start++
                }
                while (start < end && nums[end] === nums[end +1]) {
                    end--
                }
            } else if (nums[start] + nums[end] > target- nums[i]) {
                end--

            } else {
                start++
            }
        }
        
    }
    console.log(result);
    return result;
};

threeSum([-2, 0, 1, 1, 2], 0)