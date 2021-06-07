

function trim(str) {
    let left = 0
    let right = str.length-1 
    while (true) {
        if (str[left] === " ") {
            left++
        }
        if (str[right] === " ") {
            right--
        }
        if (str[left] !== " " && str[right] !== " ") {
            break
        }
    }
    return str.substring(left, right+1)
}

console.log(trim("   abc   "));