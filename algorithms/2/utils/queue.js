let {Node} = require('./node')

/**
 * 队列
 */
class Queue {
	constructor() {
		this.first = null
		this.N = 0
		this.last = null
	}
	enqueue(val) {
		let node = new Node(val)
		if (this.isEmpty()) {
			this.first = node
			this.last = this.first
		} else {
			this.last.next = node
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


let q = new Queue()
q.enqueue(12)
q.enqueue(14)
q.enqueue(34)
console.log(q.dequeue());


console.log(q);
