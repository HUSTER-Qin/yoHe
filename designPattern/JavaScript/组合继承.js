
function SuperClass (params) {
  this.params = params
}
SuperClass.prototype.getValue = function () { }

function SubClass (params) {
  SuperClass.call(this, params)
}

SubClass.prototype = new SuperClass()

// 1、父类构造函数执行了两遍
