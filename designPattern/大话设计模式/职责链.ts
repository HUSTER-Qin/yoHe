
/**
 * 接收这和发送者都没有对方明确的信息。且链中的对象自己也并不知道链的结构。结果是职责链简化对象的相互链接，他们仅需要保持一个指向其后继者的引用
 */
class Handle{
	next?:Handle
	constructor() {
	
	}
	public  setNext (parma:Handle) {
		this.next = parma
	}
	public request(money:Number){}
}


class Handle1 extends Handle{

	request(money:Number) {
		if (money < 100) {
			console.log('handle1 能处理');
			
		} else {
			if (this.next) {
				this.next.request(money)
			}
		}
	}
}

class Handle2 extends Handle{

	request(money:Number) {
		if (money < 500) {
			console.log('handle2 能处理');
			
		} else {
			if (this.next) {
				this.next.request(money)
			}
		}
	}
}
class Handle3 extends Handle{
	request(money:Number) {
		if (money > 500) {
			console.log('handle3 能处理');		
		} 
	}
}

let h1 = new Handle1()
let h2 = new Handle2()
let h3 = new Handle3()

h1.setNext(h2)
h2.setNext(h3)
h1.request(600)
