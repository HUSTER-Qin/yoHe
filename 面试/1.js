

let obj = {
    1:222,
    2:123,
    5:888
}

 function func(month,target){
    if(month<=0 || month>12){
        throw new Error('请输入1-12的月份')
    }
    let result = []
    for (let i = 1; i < month+1; i++) {
        result.push(target[i]||null)
    }
    return result;
}

console.log(func(1,obj))