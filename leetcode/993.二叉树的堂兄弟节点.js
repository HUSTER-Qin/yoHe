/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let map = new Map()
    let parent = new Map()

    const helper = function (parentNode,node, level) {
        if (!node) return
        if ([x, y].includes(node.val)) {
            map.set(node.val, level)
            parent.set(node.val, parentNode.val)
        }
        helper(node,node.left, level + 1)
        helper(node,node.right, level + 1)
    }
    helper(root,root, 0)
    console.log(map);
    console.log(parent);
    return map.get(x)===map.get(y) && parent.get(x)!==parent.get(y)
};
// @lc code=end

