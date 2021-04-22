//添加finally方法
Promise.prototype.finally=function (callback) {
   var p=this.constructor;
   return this.then(//只要是promise对象就可以调用then方法
     value => p.resolve(callback()).then(() => value),
     reason => p.resolve(callback()).then(() => {throw reason})
   );
}