
// Promise.resolve(1).then(res => {
//     console.log(res);
//     return 2
// }).catch(() => {
//     return 3
// }).then(res => {
//     console.log(res);
// })

// const pro = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve()
//     console.log(2);
// })

// pro.then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(1234);
// })

async function async1() {
    console.log(1);
    const re = await async2()
    console.log(3);
}

async function async2() {
    console.log(2);
}

Promise.resolve().then(() => {
    console.log(4);
})

setTimeout(() => {
    console.log(5);
}, 0);

async1()

console.log(6);

// 6
// 4
// 1
// 2
// 3
// 5