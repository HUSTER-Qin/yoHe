/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
	const help = function (nums, low, high) {
		 if (low > high) return null
		 let mid = Math.floor((high - low) / 2 + low)
		 let root = new TreeNode(nums[mid])
		 root.left = help(nums, low, mid - 1)
		 root.right = help(nums, mid + 1, high)
		 return root
	 }
	 return help(nums, 0, nums.length - 1)
 };

// props, methods, data, watch, computed等组件属性的初始化顺序是怎么样的？props, methods, data, watch, computed等组件属性的初始化顺序是怎么样的？
// computed
// 渲染进程 下面的线程