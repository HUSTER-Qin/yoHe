function myNew() {
    const Ctor = Array.prototype.slice.call(arguments)
    let obj = Object.create(Ctor.prototype)
    var result = constr.apply(obj, arguments);
	return result instanceof Object ? result : obj
	
}

