

function search(arr, value) {

    let left = 0
    let right = arr.length-1
    while (left<= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === value) {
            return mid
        }
        if (arr[mid] > value) {
            right = mid-1
        } else {
            left = mid+1
        }
    }
    return -1
}


let a = [1, 4, 7, 9, 23, 56, 78]

console.log(search(a, 56));