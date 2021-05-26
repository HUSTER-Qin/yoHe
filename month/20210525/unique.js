function unique(arr) {
    let map = new Map()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            result.push(arr[i])
            map.set(arr[i])
        }
        
    }
    return result
}

let a = [1, 3, 2, 4, 3, 5, 6]

console.log(unique(a));


