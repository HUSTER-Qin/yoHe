

// 改变函数执行时的this 指向
// call 接受函数参数
// apply 接受数组作为参数


function myCall(context, ...args){
    context = context ? Object(context) : window
    let fn = Symbol()
     context[fn] = this 
     let result =  context[fn](...args)
     delete context[fn]
     return result
}


function myApply(context, args){
    context = context ? Object(context) : window
    let fn = Symbol()
     context[fn] = this 
     let result
     if(args){
         result =  context[fn](...args)
     }else{
        result =  context[fn]()
     }
    
     delete context[fn]
     return result
}



function myBind(oThis, ...args){
    if(typeof oThis != 'function'){
        throw new TypeError("类型错误")
    }
    fNOP = function(){}
    fBound = function(...arg) {
        // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
        return oThis.apply(this instanceof fBound ? this: oThis,args.concat(arg));
        // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
 // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    if(this.prototype){
        fNOP.prototype = this.prototype; 
    }
    fBound.prototype = new fNOP();
    return fBound;
}

var arr=[1,11,5,8,12];
var max= myBind(Math.max,arr[0],arr[1],arr[2],arr[3]);
console.log(max(arr[4])); //12


