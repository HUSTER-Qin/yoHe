

// var _a = 1
// Object.defineProperty(this, "a", {
//     get() {
//         return _a++
//     }
// })


// let a = {
//     value:1
// }

// a.valueOf = function () {
//     return this.value+=1
// }


a = {
    value: 1,
    [Symbol.toPrimitive]() {
        return this.value++
    }
}

if (a == 1 && a == 2 && a == 3) {
    console.log('You win!!!!');
}