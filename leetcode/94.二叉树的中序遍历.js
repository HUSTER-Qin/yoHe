/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // let arr = []
    // var fun = function(a){
    //     if(!a) return
       
    //     fun(a.left)
    //     arr.push(a.val)
    //     fun(a.right)
    // }
    // fun(root)
    // return arr
    let stack = []
    let arr = []
    // stack.push(root)
    while (root ||stack.length>0) {
        if(root){
            stack.push(root)
            root = root.left
        }else{
            root = stack.pop()
            arr.push(root.val)
            root = root.right
        }
    }
    return arr
};
// @lc code=end

