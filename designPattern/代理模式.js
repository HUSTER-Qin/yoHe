class Subject{
}

class Math extends Subject{
	say() {
		console.log('Math');	
	}
}

class Proxy extends Subject{
	constructor() {
		super()
		this.real = null
	}
	say() {
		if (this.real === null) {
			this.real = new Math()
		}
		this.real.say()
	}
}

let pro = new Proxy()

pro.say()