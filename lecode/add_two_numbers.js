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
class Node {
  constructor(val) {
    this.head = null;
    this.val = val;
    this.next = null;
  }
  push(val) {
    if (!this.head) {
      this.head = new Node(val);
      return this;
    }
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  pop() {
    this.head = this.head.next;
  }
  show() {
    let node = this.head;
    while (node) {
      console.log(node.val);
      node = node.next;
    }
  }
}

let l1 = new Node()
  .push(3)
  .push(4)
  .push(2);
l1.show();
var addTwoNumbers = function(l1, l2) {};

let test = addTwoNumbers;

function sumBigNumber(a, b) {
  var res = '',
    temp = 0;
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

let a = sumBigNumber('3782647863278468012934670', '23784678091370408971329048718239749083');
console.log(a)