
//
//
// function func(num:number): string {
//     let num1 = num / 10;
//     let num2 = num % 10;
//     if (num1 < 1) {
//         return String(num);
//     } else {
//         return `${num2}${func(Math.floor(num1))}`
//     }
// }
//
// console.log(func(10));


const obj = {
    a:123
}

let ws = new WeakSet()

ws.add(obj)

console.log(ws)

