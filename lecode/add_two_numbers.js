/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
   输出：7 -> 0 -> 8
  原因：342 + 465 = 807
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor() {

  }
}


const addTwoNumbers = function (l1, l2) {
  let curL1 = l1;
  let curL2 = l2;
  const root = new ListNode();
  let cur = root;
  let res = '';
  let temp = '';
  while (curL1 || curL2 || temp) {
    curL1 = curL1 || {};
    curL2 = curL2 || {};
    temp += ~~curL1.val + ~~curL2.val;
    res += (temp % 10);
    cur.next = new ListNode((temp % 10));
    cur = cur.next;
    temp = temp > 9;
    curL1 = curL1.next;
    curL2 = curL2.next;
  }
  return root.next;
};

function sumBigNumber(a, b) {
  let res = '';
  let temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    // ~~ 不会因为 undefined 出现NaN
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}

const a = sumBigNumber('3782647863278468012934670', '23784678091370408971329048718239749083');
console.log(a);
