
function SuperClass () {

}
SuperClass.prototype.getValue = function () { }

function SubClass () {

}

SubClass.prototype = new SuperClass()
// 将子类的__proto__指向父类的的原型对象
// 缺点
// 1、通过父类实例化，父类共有属性是引用类型，一个子类更改会影响所有
// 2、子类依靠prototype 对父类实例化，无法向父类传递参数
