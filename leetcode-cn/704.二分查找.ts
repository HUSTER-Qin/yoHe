/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    
    let start: number = 0;
    let end : number = nums.length-1

    while (start<= end) {
        let mid: number =Math.floor((end+start) /2)

        if(nums[mid]===target){
            return nums[mid]
        }
        if(nums[mid]< target){
            start = mid+1
        }else{
            end = mid -1
        }

    }
    return -1
};


search( [-1,0,3,5,9,12], 9)
// @lc code=end

