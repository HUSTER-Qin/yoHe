
function myNew(fn, ...arg){
    let Ctor = Object.create(fn.property)
    let result = fn.call(Ctor, ...arg)
    return typeof result==='object' ? result : Ctor
}