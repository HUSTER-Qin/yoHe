/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let end = paths[0][1]

    while (true) {
        let city = paths.filter(item => item[0] === end)
        if (city.length>0) {
            end = city[0][1]
        } else {
            break
        }
    }
    console.log(end);
    return end
};

paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]

destCity(paths)