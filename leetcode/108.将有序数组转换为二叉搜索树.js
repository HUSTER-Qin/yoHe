/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

 class TreeNode{
     constructor(val){
        this.val = val;
        this.left = this.right = null;
     }
 }
var sortedArrayToBST = function(nums) {
   

    const sortToBst = function(nums, start, end){
        if(start> end) return null

        let mid = Math.floor((start + end +1)/2)
        let root = new TreeNode(nums[mid])
        root.left = sortToBst(nums, start, mid-1)
        root.right = sortToBst(nums, mid+1, end)

        return root
    }
    if(nums.length<=0) return null
    return  sortToBst(nums, 0 , nums.length-1)
};
// @lc code=end

console.log(sortedArrayToBST([]));

