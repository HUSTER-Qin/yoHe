
function copy(obj) {
    let result = {}

    for (const key in obj) {
        if (Object.hasOwnProperty.call(object, key)) {
            result[key] = obj[key]
            
        }
    }
    return result
}