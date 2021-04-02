/**
 * Definition for singly-linked list.
 * function ListNode(val, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.right = (right===undefined ? null : right)
 * }
 * 输入：head = [1,2,3,4]
 *  输出：[2,1,4,3]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    let help = function (head) {
        if (!head||!head.right) {
            return head;
        }        
        let p = head.right
        head.right = help(p.right)
        p.right = head 
       return p
    }
   return help(head)
};

let {Tree} = require("./Tree")

let bst = new Tree()

    let a = [1,2,3,4]
a.map(data => {
    bst.insert(data)
})
console.log(bst);
swapPairs(bst.root)