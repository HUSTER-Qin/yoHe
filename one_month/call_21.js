

Function.prototype.call = function (context) {
    let args = []
    let self = context || window
    self.fn = this
    let result = ''
    for (let i = 1; i < arguments.length; i++) {
        args.push(`arguments[${i}]`)
    }
    result = eval('self.fn(' + args + ')')
    delete self.fn
    return result
}


var f = {
    a: 3,
    show: function (val) {
        console.log(val);
        console.log(this.a);
    }
}

var o = {
    a: 2,
    show: function (val) {
        console.log(val);
        console.log(this.a);
    }
}

o.show.call(f, 12)