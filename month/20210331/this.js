



var _this = this
class Person {
    constructor(name) {
        _this.name = name
    }
}
Object.assign(Person.prototype, {
    getName: () => {
        return this.name
    }
})

const me = new Person('Yokiijay')
console.log(me.getName())


// 一般函数的this是在运行时决定的
// 箭头函数 是在定时决定的。总是指向它的父类，apply call 无法修改