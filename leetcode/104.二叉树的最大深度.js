/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
	// if (!root) {
	// 	return 0
	// }
	// return 1+ Math.max(maxDepth(root.left),maxDepth(root.right))
	if (!root) return 0
	let a = []
	let count = 0
	a.push(root)
	while (a.length > 0) {
		count++
		let len = a.length
		for (let i = 0; i < len; i++) {
			let c = a.shift()
			if (c.left) {
				a.push(c.left)
			}
			if (c.right) {
				a.push(c.right)
			}
		}
	}
	return count
};
// @lc code=end