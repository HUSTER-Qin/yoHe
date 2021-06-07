Object.prototype.call2 = function (context) {
    context.fn = this
    let args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments['+i+']')
        
    }
    let result = eval('context.fn(' + args.toString() + ')')
    delete context.fn
    return result
}


a = {
    name: 1,
    show: function (v) {
        console.log(this.name+ '-'+v);
    }
}
b = {
    name:2
}
a.show.call2(b,123)