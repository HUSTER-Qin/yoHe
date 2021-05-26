

// 例如将 input 转成output的形式
let input = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 3
    }, {
        id: 6, val: '学生3', parentId: 3
    },
  ]
  

function toTree(arr, id){
    let node = arr.filter(item=> item.parentId=== id)[0]
    let root = {
        val:node.val,
        id:node.id,
        children: toChildren(arr, node.id)
    }
    return root
}

function toChildren(arr, parentId){
    let result = []
    let nodes = arr.filter(item=> item.parentId=== parentId)

    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i]
        result.push({
            val:node.val,
            id:node.id,
            children: toChildren(arr, node.id)
        })    
    }
    return result
}

console.log(toTree(input, null));