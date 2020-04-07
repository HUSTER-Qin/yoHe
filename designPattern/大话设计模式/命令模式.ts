import { log } from "util";


class Barbecurer{
	bakeChicken () {
		console.log('烤鸡');
		
	}
	bakeMutton () {
		console.log('bakeMutton');
		
	}
}

class Command{
	receiver:Barbecurer
	constructor(bar:Barbecurer) {
		this.receiver = bar
	}
	excuteCommand () {
		
	}
}

class bakeMuttonCommand extends Command {
	constructor(bar:Barbecurer) {
		super(bar)
	}
	excuteCommand () {
		this.receiver.bakeMutton()
	}	
}

class bakeChickenCommand extends Command {
	constructor(bar:Barbecurer) {
		super(bar)
	}
	excuteCommand () {
		this.receiver.bakeChicken()
	}	
}

class Waiter{
	orders: Set<Command>
	constructor() {
		this.orders = new Set()
	}

	setOrder (fun: Command) {
		this.orders.add(fun)
	}

	cancelOrder (fun: Command) {
		this.orders.delete(fun)
	}
	notify () {
		for (const order of this.orders) {
			order.excuteCommand()
			
		}
	}
}

const bar = new Barbecurer()

let mu1 = new bakeMuttonCommand(bar)
let bc = new bakeChickenCommand(bar)

const waiter = new Waiter()

waiter.setOrder(mu1)
waiter.setOrder(bc)

waiter.notify()