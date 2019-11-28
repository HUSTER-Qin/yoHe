let Node = require('./node')

/**
 * 队列
 */
class Queue {
	constructor(val) {
		this.first = null
		this.N = 0
		this.last = null
		if (Array.isArray(val)) {
			val.map(item=> this.enqueue(item))
		}
	}
	enqueue(val) {
		let node = new Node(val)
		if (this.isEmpty()) {
			this.first = node
			this.last = node
		} else {
			this.last.next = node
			this.last = node
		}
		this.N++
		return node
		
	}
	dequeue() {
		if (this.isEmpty()) {
			return
		}
		let node = this.first
		this.first = this.first.next
		this.N--
		return node
	}
	isEmpty() {return this.N === 0 }
	size() {return this.N}
}
module.exports = exports = Queue

// let q = new Queue()
// q.enqueue(12)
// q.enqueue(14)
// q.enqueue(34)
// console.log(q.dequeue());


// console.log(q);
