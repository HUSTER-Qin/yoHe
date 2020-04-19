
class BitNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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
      node.val = str[i];
      node.left = fun();
      node.right = fun();
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
    console.log(tree.val);
    this.PreOrderTraverse(tree.left);
    this.PreOrderTraverse(tree.right);
  }

  /**
   * 中序遍历
   * @param tree
   * @returns {null}
   * @constructor
   */
  static InOrderTraverse(tree) {
    if (!tree) return null;
    this.PreOrderTraverse(tree.left);
    console.log(tree.val);
    this.PreOrderTraverse(tree.right);
  }

  /**
   * 后续遍历
   * @param tree
   * @returns {null}
   * @constructor
   */
  static PostOrderTraverse(tree) {
    if (!tree) return null;
    this.PreOrderTraverse(tree.left);
    this.PreOrderTraverse(tree.right);
    console.log(tree.val);
  }
}

const p = 'AB#D##C##';
const q = 'AB#D##C##';
const ptree = Tree.createBiTree(p);
const qtree = Tree.createBiTree(q);
// console.log(tree);
// [100] 相同的树
var isSameTree = function (p, q) {
	const check = function (p, q) {
		if (!p && !q) {
			return true
		}
		if (!p || !q) {
			return false
		}
		if (p.val != q.val) {
			return false
    }
    return true
	}
	if (!check(p, q)) {
		return false
	}
	let arr = []
	arr.push([p,q])
	while (arr.length>0) {
		let [p,q] = arr.pop()
		if (!check(p, q)) {
			return false
		}
    if (p) {
      arr.push([p.left, q.left])
		  arr.push([p.right,q.right])
    }
	}
	return true
};

console.log(isSameTree(ptree,qtree))