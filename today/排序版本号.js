

var versions = ['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1', '2.12.1.3']
sortVersion = function (list) {
    let arr = list.map(item => item.split('.'))
    arr.sort((a, b) => {
        let j = 0;
        while (a[j]!=undefined&&b[j]!=undefined) {
            if (a[j] != b[j]) {
                return b[j] - a[j]
            }
            j++
        }
        return -1
    })
    return arr.map(item=>item.join('.'));
}

console.log(sortVersion(versions))