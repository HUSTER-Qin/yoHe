/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let t = target - num;
        if (map.has(t)) {
            return [map.get(t),i]
        } else {
            map.set(num,i);
        }
        
    }

};
// @lc code=end

