
// 创建一个新的空的对象
// 将构造函数的执行上下文绑定给新对象（因此this就指向了这个新对象）
// 执行构造函数中的代码（为这个新对象添加属性）
// 如果这个函数有返回值，则返回；否则，就会默认返回新对象


function myNew() {
    const Ctor = Array.prototype.slice.call(arguments)
    let obj = Object.create(Ctor.prototype)
    var result = constr.apply(obj, arguments);
    return result instanceof Object ? result : obj
}


function objectFactory() {
    let obj = new Object

    Constructor = [].shift.call(arguments)

    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments)

    return obj
}


function Animal(name) {
    this.name = name;
}
Animal.color = "black";
Animal.prototype.say = function () {
    console.log("I'm " + this.name);
};
var cat = new Animal("cat");

console.log(
    cat.name,  //cat
    cat.height //undefined
);
cat.say(); //I'm cat

console.log(
    Animal.name, //Animal
    Animal.color //back
);
Animal.say(); //Animal.say is not a function