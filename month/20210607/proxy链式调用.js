// var pipe = function (value) {
//  // to do
// }

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// // 如何实现方法的链式调用
// pipe(3).double.pow.reverseInt.get; // 63

let win ={}
const pipe = (function () {
  return function (value) {
    let arr = []
    debugger
    let proxy =  new Proxy({}, {
      get: function (a, b) {
        if(b==='get'){
          while (arr.length>0) {
            value =  win[arr.shift()](value)
          }
          return value
        }
        console.log('[ a,b ] >', a,b)
        arr.push(b)

        return proxy
      }
    })
    return proxy;
  }
})()

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
win['double'] = double
win['pow'] = pow
win['reverseInt'] = reverseInt
// 如何实现方法的链式调用
let a = pipe(3).double
// pipe(3).double.pow.reverseInt.get; // 63