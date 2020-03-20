const CreateDiv = (function () {
  let instance
  const CreateDiv = function (params) {
    if (instance) {
      return instance
    }
    this.params = params
    this.init()
    return (instance = this)
  }
  CreateDiv.prototype.init = function () {

  }
  CreateDiv.prototype.get = function () {
    console.log(this.params)
  }
  return CreateDiv
}())

const a = new CreateDiv('sven1')
const b = new CreateDiv('sven2')
a.get()
b.get()

// 单例模式抽象，分离创建对象的函数和判断对象是否已经创建
const getSingle = function (fn) {
  let result
  return function () {
    return result || (result = fn.apply(this, arguments))
  }
}

getSingle(new CreateDiv('sven1'))
