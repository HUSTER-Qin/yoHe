class Node {
	constructor(val, left, right) {
		this.val = val
		this.left = left
		this.right = right
	}
}


class ListNode {
	constructor() {
		this.root = null
	}
	insert (val, left, right) {
		let node = new Node(val, null, null)
		if (!this.root) {
			this.root = node
			return
		}
		let cur = this.root
		while (true) {
			let a = cur
			if (!cur.left) {
				cur = cur.left
				if (!cur) {
					a.left = node
					break
				}
			} else {
				cur = cur.right
				if (!cur) {
					a.right = node
					break
				}
			}
		}
	}
}

module.exports = ListNode
