abstract class Mediator {
	public abstract  send (message: string, colleage: Colleage):void;
}

abstract class Colleage{
	protected mediator?: Mediator
	constructor(mediator:Mediator) {
		this.mediator = mediator
	}
}

class AMediator extends Mediator{
	private _cc2?: ConColleage2
	private _cc1?:ConColleage1
	constructor() {
		super()
	}
	// private cc2: ConColleage1
	
	set  cc1 (params:ConColleage1) {
		this._cc1 = params
	}

	set cc2 (params: ConColleage2) {
		this._cc2 = params
	}

	send (message: string, colleage: Colleage) {
		if (colleage === this._cc1) {
			this._cc2?.Notify(message)
		} else {
			this._cc1?.Notify(message)
		}
	}
}

class ConColleage1 extends Colleage{
	constructor(mediator:Mediator) {
		super(mediator)
	}
	send (message:string) {
		this.mediator?.send(message,this)
	}
	Notify (str: string) {
		console.log("cc1收到消息：", str);
		
	}
}
class ConColleage2 extends Colleage{
	constructor(mediator:Mediator) {
		super(mediator)
	}
	send (message:string) {
		this.mediator?.send(message,this)
	}
	Notify (str: string) {
		console.log("cc2收到消息：", str);
		
	}
}

let am = new AMediator()

let cc1 = new ConColleage1(am)
let cc2 = new ConColleage2(am)

am.cc1 = cc1
am.cc2 = cc2

cc1.send('cc1 吃饭了吗？')
cc2.send('cc2 没吃')



