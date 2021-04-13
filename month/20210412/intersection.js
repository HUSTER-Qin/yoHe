/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = new Map()
    nums1.map(item => {
        if (!map.has(item)) {
            map.set(item, true)
        }
    })
    let result = []
    for (let i = 0; i < nums2.length; i++) {
        if (map.get(nums2[i])) {
            map.delete(nums2[i])
            result.push(nums2[i])
        }
        
    }
    console.log(result);
    return result
};

intersection([4,9,5],[9,4,9,8,4])