/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let t = head
	while (t&&t.next) {
		if (t.val === t.next.val) {
			t.next = t.next.next
		} else {
			t = t.next
		}
		
	}
	return head
};
// @lc code=end
class ListNode{
	constructor(val) {
		this.val = val;
	    this.next = null;
	}
} 
let arr = [1, 1,1]
let t = new ListNode(arr[0])
let a = t
for (let index = 1; index < arr.length; index++) {
	t.next = new ListNode(arr[index])
	t = t.next
}
console.log(a);

console.log(deleteDuplicates(a));

