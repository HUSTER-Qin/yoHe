





let arr = [[1, 2], [4, 5], [6, 7], [11, 30]]



function mergeSort(arr) {
    console.log(arr);
    if (arr.length<2) return arr
    let mid = Math.floor(arr.length / 2)
    
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return mergeHelp(mergeSort(left), mergeSort(right))
}


function mergeHelp(left, right) {
    return [...left.flat(Infinity), ...right.flat(Infinity)]
}


console.log(mergeSort(arr));

