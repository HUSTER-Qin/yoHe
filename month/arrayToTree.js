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


function arrayToTree(input){
  let root = input[0]
  input.shift()
  let tree = {
    id: root.id,
    val: root.val,
    children:  input.length>0 ? toTree(root.id, input) : []
  }
  return tree
}
function toTree(id, array){
  let children = []

  for (let i = 0; i < array.length; i++) {
    let node = array[i]
      if(node.parentId===id){
        children.push({
          id: node.id,
          val: node.val,
          children:  toTree(node.id, input)
        })
      }
    
  }
  return children
}


console.log(arrayToTree(input));
