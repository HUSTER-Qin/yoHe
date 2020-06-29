/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let inLen = inorder.length
    let postLen = postorder.length
    let map = new Map()
    inorder.map((value, i) => {
        map.set(value,i)
    })

    const buildChildTree = function (postorder,postLeft,postRight,map,inLeft,inRight) {
        if (postLeft > postRight || inLeft > inRight) {
            return null
        }
        
        let root = new TreeNode(postorder[postRight])
        let pIndex = map.get(postorder[postRight])
        root.left = buildChildTree(postorder,  postLeft, pIndex - inLeft - 1 + postLeft, map, pIndex - inLeft, pIndex)
        root.right = buildChildTree(postorder, pIndex - inLeft + postLeft, postRight--, map, inRight - pIndex, pIndex + 1)
        return root
    }
    return buildChildTree(postorder,0,postLen-1,map,0,inLen)
};
// @lc code=end

