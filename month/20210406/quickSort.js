



function sortArr(arr) {
    quickSort(arr,0,arr.length-1)
}


function quickSort(arr, start, end) {
    if (start >=end) return;
    let mid = partition(arr, start, end)

    quickSort(arr, start, mid - 1)
    quickSort(arr, mid+1, end)
}

function partition(arr, start, end) {
    let target = 0
    for (let j = start; i < end; j++) {
        if (arr[j] < arr[target]) {
            target = j
            [arr[j], arr[target]] = [arr[target], arr[j]]
       }
        
    }
    return target
}

function partition(arr, left, right) {
    var pivot = left,                     // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
            index++;
        }
    }
    [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]]
    return index - 1;
}
