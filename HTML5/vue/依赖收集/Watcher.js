
const Dep = require('./Dep')  
class Watcher{
	constructor(obj, key, computed, callback) {
		this.getVal(obj, key, computed,callback)
	}

	getVal (obj, key, computed,callback) {
		Object.defineProperty(obj, key, {
			get () {
				console.log(`computed属性 - ${key}被读取！`)
				Dep.target = callback
        		return computed()
			},
			set () {
				console.error('计算属性不可被修改！')
			}
		})
	}
}

	module.exports = Watcher