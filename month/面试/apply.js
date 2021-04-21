// ES6 apply
Function.prototype.apply_ = function (obj, arr) {
	 //判断是否为null或者undefined,同时考虑传递参数不是对象情况
    obj = obj ? Object(obj) : window;
    obj.fn = this;
    let result;
    if (!arr) {
        result = obj.fn();
    } else {
        result = obj.fn(...arr);
    };

    delete obj.fn
    return result;
};