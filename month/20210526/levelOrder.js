/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {

    let queue = []
    let result = []
    queue.push(root)

    while (queue.length>0) {
        
        let len = queue.length
        for (let i = 0; i < len; i++) {
          let node =   queue.shift()
            result.push(node.val)

            node.left&& queue.push(node.left)
            node.right&& queue.push(node.right)
        }

    }
    return result
};


