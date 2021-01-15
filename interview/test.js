Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
const p = new Promise((resolve, reject) => {
    console.info('starting...');

    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('fail');
    }, 1000);
});

// 正常顺序测试
p.then((data) => {
    console.log(`%c resolve: ${data}`, 'color: green')
})
    .catch((err) => {
        console.log(`%c catch: ${err}`, 'color: red')
    })
    .finally(() => {
        console.info('finally: completed')
    });

// finally 前置测试
p.finally(() => {
    console.info('finally: completed')
})
    .then((data) => {
        console.log(`%c resolve: ${data}`, 'color: green')
    })
    .catch((err) => {
        console.log(`%c catch: ${err}`, 'color: red')
    });