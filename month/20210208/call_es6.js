
Object.prototype.call1 = function (context) {
    context.fn = this || window
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}

a = {
    name: 1,
    show: function (v) {
        console.log(this.name + '-' + v);
    }
}
b = {
    name: 2
}
a.show.call1(b, 123)