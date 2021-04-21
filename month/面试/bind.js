// 第五版
Function.prototype.bind2 = function (context,...args) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var fNOP = function () {};

    var fBound = function (...args1) {
        return self.apply(this instanceof fNOP ? this : context, args.concat(args1));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

// 1、赋值语句是右执行的,此时会先执行右侧的对象
var obj = {
    // 2、say 是立即执行函数
    say: function() {
        function _say() {
            // 5、输出 window
            console.log(this);
        }
        // 3、编译阶段 obj 赋值为 undefined
        console.log(obj);
        // 4、obj是 undefined，bind 本身是 call实现，
        // 【进阶3-3期】：call 接收 undefined 会绑定到 window。
        return _say.bind(obj);
    }(),
};
obj.say();