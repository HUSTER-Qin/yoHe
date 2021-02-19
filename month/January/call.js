

Function.prototype.es3Call = function (context) {
    // console.log(this);
    var context = context || window
    context.fn = this
    var args = []
    console.log(arguments);
    console.log(context);
    console.log(this);
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');

    }
    var result = eval('context.fn(' + args + ')')
    delete context.fn;
    return result
}

Function.prototype.es3Apply = function (context, arr) {
    var context = context || window
    context.fn = this
    var result = null
    if (!arr) {
        result = context.fn()
    } else {
        let args = []
        for (let o = 0; o < arr.length; o++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result
}


Function.prototype.bind1 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1)
    var fNOP = function () { };
    var fBound = function () {
        var args2 = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this : context, args.concat(args2))
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound

}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');



let o = {
    say: function (a) {
        console.log('say', this.name);
    }
}

let a = {
    name: 1,
    say: function (xx) {
        console.log('say1' + xx);
    }
}

o.say.es3Call(a, 'nihao')