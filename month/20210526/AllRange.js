
function AllRange(arr,target, result) {
    
    for (let i = 0; i < arr.length; i++) {
        if(target.length===arr.length){
            result.push([...target])
            return
        }
        if (target.includes(arr[i])) continue;
        target.push(arr[i])
        AllRange(arr, target, result)
        target.pop()    
    }
}   

// [1,2,3]
let a = []
AllRange([1,2,3], [], a)
console.log(a);