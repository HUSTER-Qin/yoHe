/**
 * 1.Gulp和webpack区别
 * gulp 资源处理，任务流
 * webpack：模块化打包
 * 2.数组扁平化
 * 3.数组去重
 * 4.宏任务和微任务聊一下
 * 5.类数组转化为数组
  */
	// Array.from
// Array.prototype.slice.call(arr, 0)
    

// 数组扁平化
// 把所有 包含数组的项 提取到最外面一层（将多维数组转换成一维数组）
// 方法：本质通过循环，递归去展开。
let a = [1, 2, [3, 4]] 
// 方法一
b = a.flat(Infinity)
// 方法二
function flatten(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
console.log(b);

// 数组去重
let arr = [2, 1, 2, 4, 3]
console.log(Array.from(new Set(arr)));[2, 1, 4, 3]
// es6 的应用
function unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
}

console.log(unique(arr));

// 类数组转化为数组
// Array.from
// Array.prototype.slice.call(arr, 0)


// Add（1）（2）（3）求和
// 函数柯里化
function curry(fn, args = []) {
    var length = fn.length
    return function () {
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length < length) {
            return curry.call(null, fn, newArgs)
        } else {
            return fn.apply(null, newArgs)
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}
var add1 = curry(add);
console.log(add1(2)(3)(4));
console.log(add1(2, 3, 4));
console.log(add1(2)(3, 4));
console.log(add1(2, 3)(4));


// 多个异步如何保持顺序
// promise
// async
// generator
// 回调

// Vue中向一个数组赋值，会改变它的长度改变值吗，为什么？
// 问题是 会刷新页面吗？
/**
 * 会改变长度。但是不会刷新页面。
 * 需要调用vue.set。或者调用改变数组的7个方法，比如push、splice等
 * 原因：数组被vue重写，只有调用定义的方法才能触发页面重新渲染，（主要原因是 Object.defineProperty监听数组有性能问题）
 * 
 */


//  vuerouter 传参区别
// params传参，push里面只能是 name: 'xxxx' 。注意：params只能用name来引入路由 （刷新会丢失）
// query：push里面 name和path 都可以  
// 动态路由 /:id  通过params 获取值

// 直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示。
 

