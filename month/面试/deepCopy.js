function deepCopy(obj){
    //判断是否是简单数据类型
    if(typeof obj == 'object'){
    //复杂数据类型
    var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
        //若是对象，就是result[属性名]；若是数组，就是result[下标]
        result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }
    else{
    //简单数据类型
        var result = obj;
    }
    return result;
}