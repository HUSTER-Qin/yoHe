
let aa = ['1', '2', '3'].map(parseInt)
// parseInt 接受第二个参数【解析数字的基数（2-36）如果省略回事0 以10进制解析】
// parseInt('3',2) 2进制3 是非法的
console.log(aa);

// object false 
// 这是js 的bug
[typeof null, null instanceof Object]

// reduce 在没有初始值的空数组上调用 reduce 将报错。
// [[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]


var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing'); // something



var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})(); // goodBey jack


// var END = Math.pow(2, 53);
// var START = END - 100;
// var count = 0;
// for (var i = START; i <= END; i++) {
//     count++;
// }
// console.log(count);



var ary = [0, 1, 2];
ary[10] = 10;
let b = ary.filter(function (x) {
    return x === undefined;
});
console.log(b);


var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
console.log([two - one == one, eight - six == two]);


function isOdd(num) {
    return num % 2 == 1;
}

function isEven(num) {
    return num % 2 == 0;
}

function isSane(num) {
    return isEven(num) || isOdd(num);
}
// 求余运算 会保留符号
var values = [7, 4, "13", -9, Infinity];
values.map(isSane);

// A. [true, true, true, true, true]
// B. [true, true, true, true, false]
// C. [true, true, true, false, false]
// D. [true, true, false, false, false]

console.log([0]);


console.log([1 < 2 < 3, 3 < 2 < 1]);
