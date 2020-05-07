//  数据变为可响应 
const Dep = require('./Dep')  
class Observer{
	constructor(obj) {
		this.walk(obj)	
	}
	walk (obj) {
		for (const key of Object.keys(obj)) {
			this[key] = obj[key]	
			this.proxyData(obj, key)
			this.defineReactive(this,key,obj[key])	
		}	
	}
	proxyData (obj, key) {
		// let _this = this
		// Object.defineProperty(obj, key, {
		// 	get () {
		// 		console.log(`obj---${key}--被读取：${_this[key]}`);
				
		// 		return  _this[key]
		// 	},
		// 	set (newValue) {
		// 		console.log(`obj---${key}--被设置：${newValue}`);
		// 		_this[key] = newValue
		// 	}
		// })
	}
	  defineReactive (obj, key, val) {
		let dep = new Dep()
		Object.defineProperty(obj, key, {
			get () {
				console.log(`this---${key}--被读取：${val}`);
				dep.addDeps()
				return  val
			},
			set (newValue) {
				if(newValue===val) return 
				console.log(`this---${key}--被设置：${newValue}`);
				val = newValue
				dep.notify()
			}
		})
	  }
}


module.exports = Observer
