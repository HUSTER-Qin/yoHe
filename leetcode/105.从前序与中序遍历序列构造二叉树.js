/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preLen = preorder.length
    let inLen = inorder.length
    let map = new Map()
    inorder.map((val, i) => {
        map.set(val,i)
    })

    const buildChildTree=  function (preorder, preLeft, preRight, map, inLeft, inRight) {
        if (preLeft > preRight || inLeft > inRight) {
            return null
        }
        let rVal = preorder[preLeft]
        let root = new TreeNode(rVal)
        let pIndex = map.get(rVal)
        root.left = buildChildTree(preorder, preLeft + 1, pIndex - inLeft + preLeft, map, inLeft, pIndex - 1)
        root.right = buildChildTree(preorder, pIndex - inLeft + preLeft + 1, preRight, map, pIndex + 1, inRight)
        return root
    }

   return buildChildTree(preorder,0,preLen-1,map,0,inLen)
};
// @lc code=end

