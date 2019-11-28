const {Node} = require("./node")


class Stack {
	constructor() {
		this.first = null
		this.N = 0
	}
	push(val) {
		if (this.first === null) {
			this.first = new Node(val)
		} else {
			let newNode = new Node(val)
			newNode.next = this.first
			this.first = newNode
		}
		this.N++
	}
	pop() {
		if (this.isEmpty()) {
			return 
		}
		let node = this.first
		this.first = this.first.next
		this.N--
		return node
	}
	isEmpty() { return this.N === 0 }
	size() {return this.N}
}

// let s = new Stack()
// s.push(123)
// s.pop()
// s.pop()

// console.log(s);
