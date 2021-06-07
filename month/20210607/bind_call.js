Function.prototype.myCall = function(context, ...arg){
	console.log(arg);
	context[fn] = this || window
	let result = context[fn](...arg)
	delete 
	context[fn]
	return result
}
var obj = {
    name: '听风是风'
};

function fn(a, b, c) {
    console.log(a + b + c + this.name);
};
// fn.myCall(obj, "我的", "名字", "是"); 
Function.prototype.myApply = function(context, ...arg){
	context[fn] = this || window
	console.log(arg);
	let result = context[fn](...arg)
	delete 
	context[fn]
	return result
}

function bindFn (...args) {
	let context = args.shift() // 第一个参数为绑定的this
	if (!context) throw new Error('no "this" object')
	return (...rest) => {
		// 这里的this指的是当前调用该方法的函数对象
		this.apply(context, [...args, ...rest])
	}
}

fn.call(obj, ["我的", "名字", "是"]);