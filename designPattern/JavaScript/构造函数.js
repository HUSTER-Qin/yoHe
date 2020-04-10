
function SuperClass (params) {
  this.params = params
}
SuperClass.prototype.getValue = function () { }

function SubClass (params) {
  SuperClass.call(this, params)
}
const sub = new SubClass()
console.log(sub)

// 1、没有涉及到原型，父类的原型方法不会被继承
// 2、实例创建出来的方法，不能共用，违背了代码复用的原则
