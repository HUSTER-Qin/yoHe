/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
let Tree = require('./tree')
let myTree = new Tree()
let arr = [6, 4, 3, 1, 12, 9]
for (let index = 0; index < arr.length; index++) {
    myTree.insert(arr[index])

}
var maxDepth = function (root) {
    const helper = function (node) {
        if (!node) return 0
        let deep = 0
        node.children && node.children.map(item => {
            deep = Math.max(helper(item), deep)
        })
        return deep + 1
    }
    return helper(root)
};
// @lc code=end

// maxDepth(myTree.root)

function minDepth(root) {
    if (!root) return 0
    let min = Infinity
    if (!root.left && !root.right) return 1
    if (root.left) {
        min = Math.min(min, minDepth(root.left))
    }
    if (root.right) {
        min = Math.min(min, minDepth(root.right))
    }
    return min + 1
}
// minDepth(myTree.root)


let sort = [-10, -3, -1, 1, 0, 2, 5, 9].sort()

const median = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] > nums[mid] ? nums[mid - 1] : nums[mid]);
};

// console.log(median(sort));

class TreeNode {
    constructor(val=null) {
        this.val = val;
        this.left = this.right = null;
    }
}
var sortedArrayToBST = function (nums) {


    const help = function (nums, low, high) {
        if (low > high) return
        let mid = Math.ceil((high - low) / 2 + low)
        let root = new TreeNode(nums[mid])
        root.left = help(nums, low, mid - 1)
        root.right = help(nums, mid + 1, high)
        return root
    }
    let r = help(nums, 0, nums.length - 1)
    console.log(r);
    return r
};

// sortedArrayToBST([-10, -3, 0, 5, 9])

// 有序数组的平方
function sortedSquares(arr) {
    let j = arr.length - 1
    let result = []
    for (let index = 0; index < arr.length&&index<=j; index++) {
        while (index<j&&Math.abs(arr[index])<Math.abs(arr[j])) {
            result.push(Math.pow(arr[j], 2))
            j--
        }
        result.push(Math.pow(arr[index], 2))
        
    }
    return result
}

sortedSquares([-10, -3, 0, 5, 9])
