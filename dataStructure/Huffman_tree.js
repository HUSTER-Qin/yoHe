// 最优二叉树 哈夫曼树的构建
class Node {
  constructor(element) {
    this.data = element;
    this.lChild = null;
    this.rChild = null;
  }
}
const creatHuffmanTree = function(a) {
  for (let index = 0; index < a.length; index++) {
    a[index] = new Node(a[index]);
  }
  a = a.sort(function(a, b) {
    return a.data - b.data;
  });

  while (a.length > 1) {
    b = a.splice(0, 2);
    current = new Node(b[0].data + b[1].data);
    current.lChild = b[0];
    current.rChild = b[1];
    a.push(current);
    a = a.sort(function(a, b) {
      return a.data - b.data;
    });
  }
  return a[0];
};
let a = [1, 3, 7, 9, 12, 18, 25];
let huffTree = creatHuffmanTree(a);
debugger;
let s = 0;
// 后续遍历 获取编码深度
const showTree = function(tree, deep) {
  if (tree === null) {
    return;
  }
  tree["deep"] = deep;
  // 前序遍历
  showTree(tree.lChild, deep + 1);
  // 中序遍历
  showTree(tree.rChild, deep + 1);
  // 后序遍历
  console.log(tree.data * deep);
  s += tree.data * deep;
};

showTree(huffTree, 0);
console.log(s);
