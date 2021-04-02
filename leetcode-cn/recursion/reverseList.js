/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {

//     if (head == null || head.next == null)
//         return head;
//     //保存当前节点的下一个结点
//     let next = head.next;
//     //从当前节点的下一个结点开始递归调用
//     let reverse = reverseList(next);
//     //reverse是反转之后的链表，因为函数reverseList
//     // 表示的是对链表的反转，所以反转完之后next肯定
//     // 是链表reverse的尾结点，然后我们再把当前节点
//     //head挂到next节点的后面就完成了链表的反转。
//     next.next = head;
//     //这里head相当于变成了尾结点，尾结点都是为空的，
//     //否则会构成环
//     head.next = null;
//     return reverse;
// };

var reverseList = function (head) {
    let stack = []
    while (head) {
        stack.push(head)
        head = head.next;
    }
    if(stack.length===0) return null
    let root = null
    let result = null
    while (stack.length > 0) {
        let node = stack.pop()
        if (!root) {
            root = node
            result = root
        } else {
            root.next = node
            root = node
        }   
    }
    root.next = null
    return result
}

let {Tree} = require("./Tree")

let bst = new Tree()

    let a = [1,2,3,4]
a.map(data => {
    bst.insert(data)
})

reverseList(bst.root)
console.log(bst);