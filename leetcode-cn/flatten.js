
let {Tree, Node} = require("./tree");
let myTree = new Tree();
let arr = [4, 6, 3, 1, 12, 9];
for (let index = 0; index < arr.length; index++) {
  myTree.insert(arr[index]);
}

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let result = new Node(root.val);

  const help = function (node, target) {
    if (!node) return;
    console.log(node.val);
    target.right = new Node(node.val);
    help(node.left, target.right);
    help(node.right, target.right);
  };
  help(root, result);
  return result;
};

flatten(myTree.root)
