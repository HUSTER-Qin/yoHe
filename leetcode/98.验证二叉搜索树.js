/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    let value = Number.NEGATIVE_INFINITY
    const func = function name(root) {
        if (root === null || root === undefined) return true
        if (!func(root.left)) {
            return false
        }
        if (root.val <= value) {
            return false
        }
        value = root.val
        return  func(root.right)   
    }
   return  func(root)
};
// @lc code=end

