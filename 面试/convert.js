// function covert(lists){
//     const findItem = (id) => {
//         return lists.find(item => item.id === id);
//     };
//     const result = [];
//     lists.map(item => {
//         if (item.parentId === 0) {
//             result.push(item);
//         } else {
//             const target = findItem(item.parentId);
//             target.children = target.children || [];
//             target.children.push(item);
//         }
//     });
//     return result;
// }

function convert(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    for (const item of list) {
        if (item.parentId === 0) {
            res.push(item)
            continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}

function convertDFS(source, parentId = 0){
    let trees = [];
    for (let item of source) {
        if(item.parentId === parentId) {
            let children = convertDFS(source, item['id']);
            if(children.length) {
                item.children = children
            }
            trees.push(item);
        }
    }
    return trees;
}



// 原始 list 如下
let list =[
    {id:3,name:'部门C',parentId:1},
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},

    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convertDFS(list)
console.log(result)
