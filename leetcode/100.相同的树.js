/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	// if (!p && !q) {
	// 	return true
	// }
	// if (!p ||!q) {
	// 	return false
	// }
	// if (p.val != q.val) {
	// 	return false
	// }
	// return  isSameTree(p.left,q.left)&& isSameTree(p.right,q.right)
	const check = function (p, q) {
		if (!p && !q) return true
		if ((!p || !q || (p.val != q.val))) return false
		return true
	}
	let arr = []
	arr.push([p, q])
	while (arr.length > 0) {
		let [p, q] = arr.pop()
		if (!check(p, q)) {
			return false
		}
		if (p) {
			arr.push([p.left, q.left])
			arr.push([p.right, q.right])
		}

	}
	return true
};
// @lc code=end