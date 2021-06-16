


// 构造函数的 prototype 是否在 实例的 __proto__  上


function instance(a, b) {
    let _instance = a.__proto__
    while (true) {
        if(_instance===null){
            return false
        }
        if(_instance === a.prototype){
            return true
        }
        _instance = _instance.__proto__
    }
}

function instance_of(L, R) {         // L 表示instanceof左边，R 表示instanceof右边
		let O = R.prototype;         // 取 R 的显示原型
		L = L.__proto__;             // 取 L 的隐式原型
		while (true) {               // 循环执行，直到 O 严格等于 L
			if (L === null) return false;
			if (O === L) return true;
			L = L.__proto__;
		}
	}