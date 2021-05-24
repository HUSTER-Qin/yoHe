Function.prototype.apply = function(context, arg){
    let fn = Symbol()
    context[fn] = this

    if(Array.isArray(arr)&&arg.length>0){
        result =  context[fn](...arg)
    }else{
        result = context.fn()
    }
    delete context[fn]

    return result
}