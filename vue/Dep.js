
class Dep{
	constructor() {
		this.deps = []
	}
	static target
	addDeps () {
		if (!Dep.target || this.deps.includes(Dep.target)) return 
		console.log(`添加依赖`, Dep.target);
		this.deps.push(Dep.target)
		
	}
	notify () {
		this.deps.forEach(dep => {
			dep()
		  })
	}
}

module.exports  = Dep