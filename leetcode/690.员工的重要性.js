/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
// function Employee(id, importance, subordinates) {
//     this.id = id;
//     this.importance = importance;
//     this.subordinates = subordinates;
// }
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
// BFS 广度搜索
// var GetImportance = function(employees, id) {
//         let emp = new Map()
//         employees.map(item => {
//                 emp.set(item[0], new Employee(...item))
//         })
//         let target = emp.get(id)
//         let important = target.importance
//         let subordinates = target.subordinates
//         while (subordinates.length > 0) {
//             let len = subordinates.length
//             while (len > 0) {
//                 len--
//                 let sub = emp.get(subordinates.shift())
//                 important += sub.importance
//                 subordinates = subordinates.concat(sub.subordinates)
//             }
//         }
//         return important
// };

var GetImportance = function (employees, id) {
    let target = 0;
    let root = null
    for (const item of employees) {
        if (id===item.id) {
            root = item
            break;
        }
    }
    target = root.importance;
    root.subordinates.map(item => {
        target += GetImportance(employees, item)
    })
    return target
}
// @lc code=end
// let emp = new Map();
// [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]].map(item => {
//     emp.set(item[0], new Employee(...item))
// })
// let a = GetImportance(emp, 1)
// console.log(emp);
