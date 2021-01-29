// BFS:宽度优先搜索
// 1. 一般使用队列
// DFS: 深度优先搜索
// 回溯算法 一般使用栈

const Tree = require('./tree')

let myTree = new Tree()

let arr = [3,2,4,1,6,5]

for (let index = 0; index < arr.length; index++) {
    myTree.insert(arr[index])
}

console.log(myTree);
debugger
function dfs(root) {
    let stack = []
    stack.push(root)

    while (stack.length > 0) {
        let node = stack.pop()
        console.log(node.value);
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
}

console.log(dfs(myTree.root));

var maxDepth = function (root) {
    if (!root) return 0
    let a = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    return a
};

// console.log(maxDepth(myTree.root));

var findTilt = function (root) {
    let v = 0
    const helper = function (root) {
        if (!root) return 0
        
        let left = helper(root.left)
        console.log(root.value);
        let right = helper(root.right)
         v += Math.abs(left- right)
        return root.value + left + right
    }

    return helper(root)
};

// findTilt(myTree.root)
class TreeNode{
    constructor(val, left,right) {
        this.val = (val === undefined ? 0 : val)
     this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    }
}
function increasingBST(root) {
    let target = []
    const helper = function (node, tar) {
        node.left && helper(node.left, tar)
        tar.push(node.value)
        node.right && helper(node.right, tar)
    }
    helper(root, target)
    let result = new TreeNode()
    let cur = result;
    for (const value of target) {
        cur.right = new TreeNode(value)
        cur = cur.right
    }
    return result.right
};

increasingBST(myTree.root)
