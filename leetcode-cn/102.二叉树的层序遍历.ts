/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return []
    let queue: TreeNode[] = []
    queue.push(root)
    let result:number[][] = []
    while (queue.length>0) {
        let len = queue.length
        let target: number[] = []
        while (len>0) {
            len--
            let node: TreeNode = queue.shift()
            target.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(target)
    }
    return result
};
// @lc code=end

