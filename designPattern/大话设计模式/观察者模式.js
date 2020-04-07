
// 被观察 对象
class Subject{
	constructor() {
		this.observer = new Set()
		this.fun = new Set()
	}
	add(ob) {
		this.observer.add(ob)
	}
	addHandle(fun) {
		this.fun.add(fun)
	}
	remove(ob) {
		this.observer.delete(ob)
	}
	notify(message) {
		for (const iterator of this.fun.keys()) {
			iterator.apply(null,message)
		}
	}
	

}

// 被观察者
class ConcreteSubject extends Subject{
	set secretaryAction(message) {
		this.notify(message)
	}
}

// 具体观察者
class ConcreteObserver{
	constructor(name, sub) {
		this.name = name
		this.sub = sub
	}

	update(message) {
		console.log(`观察者 ${this.name} ${message}，关闭股票继续工作！`);
		
	}
}

class ConcreteObserver2{
	constructor(name, sub) {
		this.name = name
		this.sub = sub
	}

	update2(message) {
		console.log(`观察者 ${this.name} ${message}，关闭股票继续工作---2！`);
		
	}
}

let ob = new ConcreteSubject()

let s1 = new ConcreteObserver('学生1', ob)
let s2 = new ConcreteObserver2('学生2', ob)

ob.addHandle(s1.update)
ob.addHandle(s2.update2)
ob.add(s1)
ob.add(s2)

ob.secretaryAction = '老板回来了'
