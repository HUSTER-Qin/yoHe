/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const recur = function(node){
        if(!node) return 0
        let left = recur(node.left)
        // -1  不平衡
        if(left===-1) return -1
        let right = recur(node.right)
        if(right===-1) return -1
       //如果子树平衡(也就是相应的深度之差的绝对值小于2),则返回该子树的深度用于和他的兄弟子树比较深度之差
        return Math.abs(left-right)< 2 ? Math.max(left,right) + 1 : -1
    }
    // -1 是不平衡
    return recur(root) != -1
};
// @lc code=end

