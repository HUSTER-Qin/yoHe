

function race(arr) {
    if(!arr.isArray(arr)){
        throw new TypeError('arguments 必须是数组')
    }

    return new Promise((resolve,reject)=>{
        for (let i =0; i< arr.length;i++){
            Promise.resolve(arr[i]).then(resolve,reject)
        }
    })
}