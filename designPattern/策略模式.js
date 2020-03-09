
class Validator {
	constructor() {
		this.cache = []
		this.rules= {
			isEmpty:(value, errMsg)=> {
				if (value==="") {
					return errMsg
				}
			},
			mobileFormat:(value, errMag) =>{
				if (!/(^1[3\5|8][0-9]{9}$)/.test(value)) {
					return errMag
				}
			}
		}
	}
	addRule(params) {
		console.log(Object.prototype.toString.call(params));
		
		if (Object.prototype.toString.call(params)==='[object Object]') {
			this.rules = Object.assign(this.rules, params)
		}
	}
	add(value, rule, errMag) {
		this.cache.push(() => {
			return this.rules[rule].apply(this,[value,errMag])
		})
	}
	start() {
		for (let i = 0; i < this.cache.length; i++) {
			const fun = this.cache[i];
			let msg = fun()
			if (msg) {
				return msg
			}
		}
	}
}


let v = new Validator()
v.addRule({
	a: function (value, errMsg) {
		if (value === 2) {
			return errMsg
		}
	}
})
v.add("1", 'isEmpty', '密码不能为空')
v.add(2, 'a',  '密码不能为空')
let msg = v.start()

console.log(msg);
