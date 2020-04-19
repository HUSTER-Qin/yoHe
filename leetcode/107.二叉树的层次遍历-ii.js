/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
	if (!root) return []
	let a = []
	let t = []
	a.push(root)
	while (a.length > 0) {
		let len = a.length
		let c = []
		for (let i = 0; i < len; i++) {
			let node = a.shift()
			c.push(node.val)
			if (node.left) {
				a.push(node.left)
			}
			if (node.right) {
				a.push(node.right)
			}
		}
		t.unshift(c)
	}
	return t
};
// @lc code=end

