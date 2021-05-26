
function sort(arr) {
    
    for (let i = 1; i < arr.length; i++) {   
        for (let j = i; j >= 0; j--) {
            if (arr[j-1] > arr[j]) {
               [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
           }  
        }   
    }
    return arr
}


let a = [1, 4, 2, 5, 7, 3]

console.log(sort(a));