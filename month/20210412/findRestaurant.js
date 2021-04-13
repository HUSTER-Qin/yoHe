/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let map = new Map()
    let sum = Infinity
    let result = []
    list1.map((item, index) => map.set(item, index))
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            let r = map.get(list2[i]) + i
            if (r == sum) {
                result.push(list2[i])
            }
            if (r < sum) {
                result = [list2[i]]
                sum = r
            }
            
           
        }  
    }
    console.log(result);
    return result
};

findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"],["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"])