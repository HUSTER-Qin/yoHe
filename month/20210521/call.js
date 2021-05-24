

Function.prototype.call = function(context,...args){
    let sy = [Symbol('fn')]
    context[sy] = this

    let result =  context.sy(...args)

    delete context[sy]
    return  result
}


let a = {
    a:1,
    log:function(){
        console.log(this.a);
    }
}

let b = {
    a:2
}

a.log.call(b)