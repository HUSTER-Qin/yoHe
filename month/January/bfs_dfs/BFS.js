// BFS:宽度优先搜索
// 1. 一般使用队列
// DFS: 深度优先搜索
// 回溯算法 一般使用栈

const Tree = require('./tree')

let myTree = new Tree()

let arr = [1, 2, 3, 4]

for (let index = 0; index < arr.length; index++) {
    myTree.insert(arr[index])   
}
debugger
console.log(myTree);


// dfs
function dfs(tree) {
    let stack = []
    stack.push(tree)
    while (stack.length > 0) {
        let node = stack.pop()
        console.log(node.value); 
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
}

// dfs(myTree.root)

function bfs(tree) {
    let queue = []
    queue.push(tree)
    while (queue.length > 0) {
        let len = queue.length; 
        while (len>0) {
            let node = queue.shift()
            console.log(node.value);
            if (node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            len--
        }

    }
}
// bfs(myTree.root)

var levelOrderBottom = function (root) {
    if(!root) return 0
    let queue = []
    let deep = 0
    queue.push(root.left)
    queue.push(root.right)
    while (queue.length > 0) {
        let l = queue.shift()
        let r = queue.pop()

        if (!l && r) return false
        if (l && r) return false
        
        queue.unshift(l.right)
        queue.unshift(l.left)
       
        queue.push(l.right)
        queue.push(r.left)


    }
    return true;
};
// console.log(levelOrderBottom(myTree.root));

var isCousins = function (root, x, y) {
    if (!root) return []
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let len = queue.length
        let target = new Map()
        while (len > 0) {
            len--
            let node = queue.shift()
            if (node.left && [x, y].includes(node.left.value)) {
                target.set(node.left.value, node.value)
            }
            if (node.right && [x, y].includes(node.right.value)) {
                target.set(node.right.value, node.value)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (target.size != 0) {
            return !(target.get(x) === target.get(y))
        }
    }
    return false;
};

// isCousins(myTree.root,4,3)