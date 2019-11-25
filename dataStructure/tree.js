
class BitNode {
  constructor(data) {
    this.data = data;
    this.lChild = null;
    this.rChild = null;
  }
}
class Tree {
  /**
   * 前序遍历生成 二叉树
   * @param str
   * @returns {null|BitNode}
   */
  static createBiTree(str) {
    let i = -1;
    const fun = function () {
      if (i === str.length - 1) return null;
      const node = new BitNode();
      i++;
      if (str[i] === '#') {
        return null;
      }
      node.data = str[i];
      node.lChild = fun();
      node.rChild = fun();
      return node;
    };
    return fun();
  }

  /**
   * 前序遍历
   * @param tree
   * @returns {null}
   * @constructor
   */
  static PreOrderTraverse(tree) {
    if (!tree) return null;
    console.log(tree.data);
    this.PreOrderTraverse(tree.lChild);
    this.PreOrderTraverse(tree.rChild);
  }

  /**
   * 中序遍历
   * @param tree
   * @returns {null}
   * @constructor
   */
  static InOrderTraverse(tree) {
    if (!tree) return null;
    this.PreOrderTraverse(tree.lChild);
    console.log(tree.data);
    this.PreOrderTraverse(tree.rChild);
  }

  /**
   * 后续遍历
   * @param tree
   * @returns {null}
   * @constructor
   */
  static PostOrderTraverse(tree) {
    if (!tree) return null;
    this.PreOrderTraverse(tree.lChild);
    this.PreOrderTraverse(tree.rChild);
    console.log(tree.data);
  }
}

const str = 'AB#D##C##';
const tree = Tree.createBiTree(str);
console.log(tree);
