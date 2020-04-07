function Handler () {
  this.next = null
  this.setNext = function (_handler) {
    this.next = _handler
  }

  this.handleRequest = function (money) {

  }
};

// 采购部
var CGBHandler = function () {}
CGBHandler.prototype = new Handler()
CGBHandler.prototype.handleRequest = function (money) {
  // 处理权限最多10000
  if (money < 10000) {
    console.log('同意')
  } else {
    console.log('金额太大，只能处理一万以内的采购')
    if (this.next) {
      this.next.handleRequest(money)
    }
  }
}

// 总经理
var ZJLHandler = function () {}
ZJLHandler.prototype = new Handler()
ZJLHandler.prototype.handleRequest = function (money) {
  // 处理权限最多100000
  if (money < 100000) {
    console.log('10万以内的同意')
  } else {
    console.log('金额太大，只能处理十万以内的采购')
    if (this.next) {
      this.next.handleRequest(money)
    }
  }
}

// 董事长
var DSZHandler = function () {}
DSZHandler.prototype = new Handler()
DSZHandler.prototype.handleRequest = function (money) {
  // 处理权限至少100000
  if (money >= 100000) {
    console.log('10万以上的我来处理')
    // 处理其他逻辑
  }
}

function Client () {
  var cgb = new CGBHandler()
  var zjl = new ZJLHandler()
  var dsz = new DSZHandler()
  cgb.setNext(zjl)
  zjl.setNext(dsz)

  cgb.handleRequest(800000)
}

Client()
