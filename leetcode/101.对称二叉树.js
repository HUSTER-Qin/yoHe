/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {

	const ck = function (a, b) {
		if (!a) {
			return b===null
		}
		if (!b) {
			return false
		}
		if (a.val!=b.val) {
			return false
		}
		return ck(a.left, b.right) && ck(a.right,b.left)
	}
	if(!root) return true
	return ck(root.left, root.right)
	
	
};
// @lc code=end

let List = require('./creatNode')
let  l = new List()
let a = [1, 2, 2, 3, 4, 4, 3]
for (let i = 0; i < a.length; i++) {
	
	l.insert(a[i])
}

console.log(l);


console.log(isSymmetric(l));


