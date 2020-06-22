

// tree.ts
namespace BinaryTree {
	class Node {
		value: number;
		left: Node | null;
		right: Node | null;
		constructor(value: number) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	export class BST {
		root: Node | null;
		constructor() {
			this.root = null;
		}
		// 前序遍历
		preOrderTraverse1(node: Node | null) {
			if (node) {
				console.log(node.value);
				this.preOrderTraverse1(node.left);
				this.preOrderTraverse1(node.right);
			}
		}
		//前序遍历（非递归）
		preOrder(node: Node | null) {
			let stack = [];
			while (node !== null || stack.length > 0) {
				if (node != null) {
					console.log(node.value);
					stack.push(node);
					node = node.left;
				} else {
					let a = stack.pop();
					if (a) node = a.right;
				}
			}
		}
		//  中序遍历
		inOrderTraverse1(node: Node | null) {
			if (node) {
				this.inOrderTraverse1(node.left);
				console.log(node.value);
				this.inOrderTraverse1(node.right);
			}
		}
		// 中序遍历(非递归)
		inOrder(node: Node | null) {
			let stack = [];
			while (node || stack.length > 0) {
				if (node) {
					stack.push(node);
					node = node.left;
				} else {
					let a = stack.pop();
					if (a) {
						console.log(a.value);
						node = a.right;
					}
				}
			}
		}
		// 后续遍历
		postOrderTraverse1 (node: Node | null) {
			if (node) {
				this.postOrderTraverse1(node.left)
				this.postOrderTraverse1(node.right)
				console.log(node.value);	
			}
		}
		insert(value: number) {
			let node = new Node(value);
			let insertNode = (o: Node, n: Node) => {
				if (n.value < o.value) {
					if (o.left === null) {
						o.left = n;
					} else {
						insertNode(o.left, n);
					}
				} else {
					if (o.right === null) {
						o.right = n;
					} else {
						insertNode(o.right, n);
					}
				}
			};
			if (!this.root) {
				this.root = node;
			} else {
				insertNode(this.root, node);
			}
		}
	}
}

// console.log(BinaryTree.BST);

let bst = new BinaryTree.BST();
let barr = [44, 63, 2, 9, 2, 3, 5, 12, 44, 65, 2, 9, 4, 11, 0];
for (let i = 0; i < barr.length; i++) {
	bst.insert(barr[i]);
}

// console.log(bst.root);

bst.postOrderTraverse1(bst.root);
console.log("===");

bst.inOrder(bst.root); 