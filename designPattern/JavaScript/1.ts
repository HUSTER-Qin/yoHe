
class Method{

	method: Set<Function>
	constructor() {
		this.method = new Set()
	}
	addMethod (fun:Function) {
		this.method.add(fun)
	}
	display () {
		for (const method of this.method) {
			method()
		}
	}
}

let M = new Method()

M.addMethod(function b(){
	console.log(123);
	
})

M.display()