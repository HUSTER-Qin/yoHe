// 循环链表
// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class CircularLinkList {
  constructor() {
    this.head = new Node(null);
    this.head.next = this.head;
    this.len = 0;
  }

  push(val) {
    const newNode = new Node(val);
    let node = this.head;
    while (node.next !== this.head) {
      node = node.next;
    }
    node.next = newNode;
    newNode.next = this.head;
    this.len++;
  }

  insertList(i, e) {
    let node = this.head.next;
    let j = 1;
    while (node !== this.head && j < i) {
      node = node.next;
      ++j;
    }
    if (!node || j > i) throw Error(`${i}不在范围`);
    const newNode = new Node(e);
    newNode.next = node.next;
    node.next = newNode;
    this.len++;
  }

}


const c = new CircularLinkList();
c.push(1);
c.push(2);
c.push(3);
c.push(4);
c.insertList(2, 567);
const b = new CircularLinkList();
b.push('hello');
console.log(c);
