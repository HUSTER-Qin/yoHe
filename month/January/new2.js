

const myNew = function () {
    const Ctor = Array.prototype.slice(arguments)
    let obj = Object.create(Ctor.prototype)

   let result =  obj.apply(Ctor, arguments)
    return result instanceof Object ? result : obj
}


let a = new myNew()
