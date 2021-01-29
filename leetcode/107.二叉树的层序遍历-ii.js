/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const helper = function (list, node, level) {
        if (!node) return 
        if (level >= list.length) {
            list.push(new Array())
        }
        list[level].unshift(node.val)
        helper(list, node.right, level + 1)
        helper(list, node.left, level + 1)
    }
    let list = []
    helper(list, root, 0)
    return list.reverse()
};
// @lc code=end

