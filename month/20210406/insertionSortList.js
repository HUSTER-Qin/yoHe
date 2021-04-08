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
var insertionSortList = function (head) {

    if(!head) return null
    let root = new ListNode(0)
    root.next = head
    let lastNode = head
    let current = head.next;
    while (!current) {
       
        if (current.val >= lastNode.val) {
            lastNode = lastNode.next;
        } else {
            let prev = root

            while (prev.next.val<= current.val) {
                prev = prev.next
            }
            lastNode.next = current.next;
            current.next = prev.next;
            prev.next = current;
        }

        current = lastNode.next
    }
    return root.next
};