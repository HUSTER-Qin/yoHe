Function.prototype.call = function (context, ...args) {
	context = context ? Object(context) : window; 
	var fn = Symbol(); // added
	context[fn] = this; // changed
  
	let result = context[fn](...args); // changed
  
	delete context[fn]; // changed
	return result;
}
  
// 测试用例
var value = 2;
var obj = {
    value: 1,
    fn: 123
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); 
// 2

console.log(bar.call(obj, 'kevin', 18));
// 1
// {value: 1, name: "kevin", age: 18}

console.log(obj);
// {value: 1, fn: 123}