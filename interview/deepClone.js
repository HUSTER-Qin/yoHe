function deepClone(obj, parent = null) {
    let result; // 最后的返回结果

    let _parent = parent; // 防止循环引用
    while (_parent) {
        if (_parent.originalParent === obj) {
            return _parent.currentParent;
        }
        _parent = _parent.parent;
    }

    if (obj && typeof obj === "object") { // 返回引用数据类型(null已被判断条件排除))
        if (obj instanceof RegExp) { // RegExp类型
            result = new RegExp(obj.source, obj.flags)
        } else if (obj instanceof Date) { // Date类型
            result = new Date(obj.getTime());
        } else {
            if (obj instanceof Array) { // Array类型
                result = []
            } else { // Object类型，继承原型链
                let proto = Object.getPrototypeOf(obj);
                result = Object.create(proto);
            }
            for (let key in obj) { // Array类型 与 Object类型 的深拷贝
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === "object") {
                        result[key] = deepClone(obj[key], {
                            originalParent: obj,
                            currentParent: result,
                            parent: parent
                        });
                    } else {
                        result[key] = obj[key];
                    }
                }
            }
        }
    } else { // 返回基本数据类型与Function类型,因为Function不需要深拷贝
        return obj
    }
    return result;
}

// 调试用
function construct() {
    this.a = 1,
        this.b = {
            x: 2,
            y: 3,
            z: [4, 5, [6]]
        },
        this.c = [7, 8, [9, 10]],
        this.d = new Date(),
        this.e = /abc/ig,
        this.f = function (a, b) {
            return a + b
        },
        this.g = null,
        this.h = undefined,
        this.i = "hello",
        this.j = Symbol("foo")
}
construct.prototype.str = "I'm prototype"
var obj1 = new construct()
obj1.k = obj1
obj2 = deepClone(obj1)
obj2.b.x = 999
obj2.c[0] = 666
console.log(obj1)
console.log(obj2)
console.log(obj1.str)
console.log(obj2.str)