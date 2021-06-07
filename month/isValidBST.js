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
 * @return {boolean}
 */
var isValidBST = function (root) {

    let queue = []
    queue.push(root)

    while (queue.length>0) {
        
        let len = queue.length

        for (let i = 0; i < len; i++) {
            let node = queue.shift()

            if (node.left) {
                if (node.left.val >= node.val) {
                    return false
                }
                queue.push(node.left)
            }
            if (node.right) {
                if (node.right.val<= node.val) {
                    return false
                }
                queue.push(node.right)
            }  
        }

    }
    return true
};