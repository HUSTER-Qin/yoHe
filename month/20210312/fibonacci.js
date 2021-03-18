
// function fib(n) {
//     if (n < 3) return 1
//     return fib(n - 1) + fib(n - 2)
// }


// console.log(fib(5));


// function fibonacci(m) {
//     if (m == 1 || m == 2) {
//         return 1;

//     }
//     return fibonacci(m - 1) + fibonacci(m - 2);
// }

// console.log(fibonacci(5));

function Fibonacci(n) {
    if (n < 3) {
        return 1;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(5));

function Fibonacci2(n, a = 1, b = 1) {
    if (n < 3) { return b };

    return Fibonacci2(n - 1, b, a + b);
}
console.log(Fibonacci2(5));