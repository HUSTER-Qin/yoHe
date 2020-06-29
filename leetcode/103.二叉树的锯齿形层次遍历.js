/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

const { stat } = require("fs");

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
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let result = []
    let stack = []
    let flag = false 
    stack.push(root)
    while (stack.length>0) {
        let arr = []
        let len = stack.length
        for (let i = 0; i < len; i++) {
            let node = stack.shift() 
            flag ? arr.unshift(node.val) : arr.push(node.val) 
            if (node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
            
        }
        result.push(arr)
        flag = !flag
    }
    return result
    
};
// @lc code=end

