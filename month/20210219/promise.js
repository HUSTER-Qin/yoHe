

// Promise.resolve(1).then(res => {
//     console.log(res);
//     return 2
// }).catch(err => {
//     return 3
// }).then(res => {
//     console.log(res);
// })
// // 1 2

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve()
//     console.log(2);
// })

// promise.then(() => {
//     console.log(3);
// })

// console.log(4);

// // 4 1 3 2


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)

// promise pendding
// promise pendding

// setTimeout(() => console.log(5), 0);
// new Promise(resolve => {
//     console.log(1);
//     resolve(3);
//     Promise.resolve().then(() => console.log(4))
// }).then(num => {
//     console.log(num)
// });
// console.log(2);

// 1 2 3 4 5

// const promise = new Promise((resolve, reject) => {
//     resolve('success1')
//     reject('error')
//     resolve('success2')
// })

// promise
//     .then((res) => {
//         console.log('then: ', res)
//     })
//     .catch((err) => {
//         console.log('catch: ', err)
//     })


// success1

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('once')
//         resolve('success')
//     }, 1000)
// })

// const start = Date.now()
// promise.then((res) => {
//     console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//     console.log(res, Date.now() - start)
// })

// once 
// success 1 
// success 1


Promise.resolve()
// .then(() => {
//     return new Error('error!!!')
// })
// .then((res) => {
//     console.log('then: ', res)
// })
// .catch((err) => {
//     console.log('catch: ', err)
// })

// // then：error


// const promise = Promise.resolve()
//     .then(() => {
//         return promise
//     })
// promise.catch(console.error)
// 死循环


// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .then(console.log)
// 3 不是函数 会值穿透


// Promise.resolve()
//     .then(function success(res) {
//         throw new Error('error')
//     }, function fail1(e) {
//         console.error('fail1: ', e)
//     })
//     .catch(function fail2(e) {
//         console.error('fail2: ', e)
//     })

// fail2

// process.nextTick(() => {
//     console.log('nextTick')
// })
// Promise.resolve()
//     .then(() => {
//         console.log('then')
//     })
// setImmediate(() => {
//     console.log('setImmediate')
// })
// console.log('end')

// end nextTick then setImmediate


// const first = () => (new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//         console.log(7);
//         setTimeout(() => {
//             console.log(5);
//             resolve(6);
//         }, 0)
//         resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//         console.log(arg);
//     });

// }));

// first().then((arg) => {
//     console.log(arg);
// });
// console.log(4);


// 4 3 2 7 1 5
// 3 7 4 1 2 5


// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message))

// var p = new Promise((resolve, reject) => {
//     return Promise.reject('sd').catch(err => {
//         console.log(err,'===');
//     })
// })
// p.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })
// p.catch(error => console.log(error.message))
// p.catch(error => console.log(error.message)).then(res => {
//     console.log(res);
// })


// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
//     .catch(error => {
//         console.log(2);
//         console.log(error)
//     })
//     .then(error => {
//         console.log(1);
//         console.log(error)
//     })

// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//         throw Error('Oh noes!')
//     })
//     .catch(error => {
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message))

// Promise.resolve('Success!')
//     .then(data => {
//         return data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//         return data
//     })
//     .then(console.log)

// Promise.resolve('Success!')
//     .then(() => {
//         throw Error('Oh noes!')
//     })
//     .catch(error => {
//         return 'actually, that worked'
//     })
//     .then(data => {
//         throw Error('The fails!')
//     })
//     .catch(error => console.log(error.message))

// const first = () => (new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//         console.log(7);
//         setTimeout(() => {
//             console.log(5);
//             resolve(6);
//         }, 0)
//         resolve(1);
//     });
//     resolve(2);
//     p.then((arg) => {
//         console.log(arg);
//     });

// }));

// first().then((arg) => {
//     console.log(arg);
// });
// console.log(4);


// 3 7 4 1 2 5


async function async1() {
    console.log(1);
    const result = await async2();
    console.log(3);
}

async function async2() {
    console.log(2);
}

Promise.resolve().then(() => {
    console.log(4);
});

setTimeout(() => {
    console.log(5);
});

async1();
console.log(6);

// 1 6 4 2 3 5