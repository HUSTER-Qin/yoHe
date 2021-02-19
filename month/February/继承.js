

function Super(foo) {
    this.foo = foo
}

Super.prototype.print = function () {
    console.log(this.foo);
}

function Sub(bar) {
    this.bar = bar
    // 调用父类的 构造函数
    Super.call(Sub)
}

// 将子类原型绑定在父类原型的复制对象上
// 之后修改子类原型不会影响父类原型
Sub.prototype = Object.create(Super.prototype)

// 让子类的构造函数指向 子类构造函数
Sub.prototype.constructor = Sub



// es6 继承
class Super{
    constructor(foo) {
        this.foo = foo
    }
    print() {
        console.log(this.foo);
    }
}


class Sub extends Super{
    constructor(bar, foo) {
        Super(foo)
        this.bar = bar
    }
}



