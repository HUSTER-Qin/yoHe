myNew = function (fn, ...arg) {
    let Ctor = Object.create(fn.prototype)
    let result = fn.call(Ctor, ...arg)
    return typeof result === 'Object' ? result : Ctor
}
// //自己定义的new方法
// let newMethod = function (Parent, ...rest) {
//     // 1.以构造器的prototype属性为原型，创建新对象；
//     let child = Object.create(Parent.prototype);
//     // 2.将this和调用参数传给构造器执行
//     let result = Parent.apply(child, rest);
//     // 3.如果构造器没有手动返回对象，则返回第一步的对象
//     return typeof result  === 'object' ? result : child;
// };

function Person() {

}

let c = new Person()
let d = myNew(Person)


let a = 1

setTimeout(() => console.log("d"), 0)
var r = new Promise(function (resolve, reject) {
    resolve()
});
r.then(() => {
    var begin = Date.now();
    while (Date.now() - begin < 1000);
    console.log("c1")
    new Promise(function (resolve, reject) {
            resolve()
        })
        .then(() => console.log("c2"))
});