/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for result binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let s = []
    let result = []
    s.push(root)
    if(!root) return result
    while (s.length>0) {
        var node = s.pop()
        result.push(node.val)
        if(node.right){
            s.push(node.right)
        }
        if(node.left){
            s.push(node.left)
        }
    }
    return result
};
// @lc code=end

