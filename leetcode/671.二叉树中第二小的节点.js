/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
 */

const { ifError, notDeepEqual } = require("assert");

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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    if(!root) return -1
    let stack = []
    let set = new Set()
    stack.push(root)
    while (stack.length>0) {
        let node = stack.pop()
        set.add(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    let arr = Array.from(set)
    arr.sort()
    return arr.length>1 && arr[0]!==arr[arr.length-1] ? arr[1] : -1
};
// @lc code=end



