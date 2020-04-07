class Operation {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class OperationAdd extends Operation {

	GetResult() {
		return this.x + this.y
	}
}
class OperationSub extends Operation {
	GetResult() {
		return this.x - this.y
	}
}

class OperationFactory  {

	createOperate(str) {
		let opr = null
		switch (str) {
			case '+':
				opr = new OperationAdd()
				break;
			case '-':
				opr = new OperationSub()
				break;
			default:
				break;
		}
		return opr
	}
}

let opr = new OperationFactory()

let o = opr.createOperate('-')
o.x = 1
o.y = 2

console.log(o.GetResult());


