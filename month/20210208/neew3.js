
const myNew = function () {
    let Ctor = Array.prototype.slice(arguments)
    let obj = Object.create(Ctor.prototype)
    let result = obj.apply(obj, arguments)
    return result instanceof Object ? result : obj
}


Function.prototype.myCall = function (context) {
    context.fn = this || window
    let args = [...arguments].shift()
    let result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myCallEs3 = function (context) {
    context.fn = this || window

    let args = []

    for (let i = 1; i < arguments.length; i++) {
       args.push(`arguments[${i}]`)
        
    }
    let result = eval("context.fn(" + args + ")")
    delete context.fn
    return result

}

// myCall(this,...)