/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const t = new ListNode()
  let c = t
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      c.next = l1
      c = c.next
      l1 = l1.next
    } else {
      c.next = l2
      c = c.next
      l2 = l2.next
    }
  }
  if (l1 === null) {
    c.next = l2
  } else {
    c.next = l1
  }
  return t.next
}
// @lc code=end
