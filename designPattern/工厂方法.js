class LeiFeng {
	constructor(name = "leifeng") {
		this.name = name
	}
	Sweep() {
		console.log(this.name + '扫地');

	}
	Wash() {
		console.log(this.name + '洗衣服');

	}
}
class Undergraduate extends LeiFeng {
	constructor() {
		super()
		this.name = '自愿者'
	}
}
class Volunteer extends LeiFeng {
	constructor() {
		super()
		this.name = "社区"
	}
}
class UndergraduateFactory {

	createLeiFeng() {
		return new Undergraduate()
	}
}
class VolunteerFactory {

	createLeiFeng() {
		return new Volunteer()
	}
}

let f = new VolunteerFactory()

let t = f.createLeiFeng()
t.Sweep()

