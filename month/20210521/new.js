myNew = function (fn, ...arg) {
    let Ctor = Object.create(fn.prototype)
    let result = fn.call(Ctor, ...arg)
    return typeof result === 'Object' ? result : Ctor
}