

let a = [1, 2, [4, 5, [6, 7]]]

console.log(a.flat(1));
console.log(a);

function flatDeep (arr) {
    return Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatDeep(b)], []) : [arr]
}

console.log(flatDeep(a));