
function flat(arr) {
    
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flat(b): [b]), [])

}


let a = [1, 4, [5, 7],[8,9,[10]]]

console.log(flat(a));