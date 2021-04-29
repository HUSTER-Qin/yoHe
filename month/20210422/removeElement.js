/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
//  var removeElement = function(nums, val) {
//     let j = 0
//     for (let i = 0; i < nums.length; i++) {
//        if(nums[i]!==val){
//            nums[j] = nums[i]
//            j++
//        }  
//     }
//     console.log(j, nums);
//     return j
// };
var removeElement = function(nums, val) {

    let left = 0;
    let right = nums.length-1
    while(left<=right){
        if(nums[left]===val){
            nums[left] = nums[right]
            right--
        }else{
            left++
        }
    }
    console.log(left, nums);
    return left
};
nums = [3,2,2,3], val = 3
removeElement(nums, val)