// let undefined = 1234
// console.log(undefined);

// let b = void (0)
// console.log(b);


// function a() {
//     let undefined = 'df'
//     console.log(undefined);
// }


var a = 1;
foo();

var b = 2;
function foo() {
    console.log(b); // 2
    console.log(a); // error
}

class MyClass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}

[1, 2, 3] instanceof new MyClass() // true