
class CreateIterator{
	constructor(aggregate) {
		this.current = 0
		this.aggregate = aggregate
	}

	first() {
		return this.aggregate[0]
	}
	next() {
		this.current++
		if (this.current < this.aggregate.length) {
			return this.aggregate[this.current]
		}
	}
	isDone() {
		return this.current>= this.aggregate.length
	}
	currentItem() {
		return this.aggregate[this.current]
	}
}
let list = [1, 3, 6, 8, 7, 9]

let c = new CreateIterator(list)

console.log(c.first());

while (!c.isDone()) {
	console.log(c.currentItem());
	c.next()
	
}


