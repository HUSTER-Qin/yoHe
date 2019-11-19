// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.len = 0;
    this.head = new Node(null);
  }

  size() {
    return this.len;
  }

  isEmpty() {
    return this.len !== 0;
  }

  push(val) {
    this.len++;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(val);
  }

  /**
     * 获取第i个元素
     * @param i
     */
  getElem(i) {
    let node = this.head.next;
    let j = 1;
    while (node && j < i) {
      node = node.next;
      ++j;
    }
    if (!node || j > i) return false;
    return node;
  }

  /**
     * 在指定i 后面插入e
     * @param i
     * @param e
     */
  listInsert(i, e) {
    let node = this.head.next;
    let j = 1;
    while (node && j < i) {
      node = node.next;
      ++j;
    }
    if (!node || j > i) throw Error(`${i}不在范围`);
    const newNode = new Node(e);
    newNode.next = node.next;
    node.next = newNode;
    this.len++;
  }

  /**
     * 删除链表 i 位置的 元素
     * @param i
     */
  listDelete(i) {
    let node = this.head;
    let j = 1;
    while (node.next && j < i) {
      node = node.next;
      ++j;
    }
    if (!node.next || j > i) return false;
    const p = node.next;
    node.next = p.next;
    this.len--;
    return p;
  }

  clearList() {
    this.len = 0;
    this.head = new Node(null);
  }

  show() {
    let node = this.head.next;
    let str = '';
    while (node) {
      str += `${node.value}->`;
      node = node.next;
    }
    console.log(this.len);
    console.log(str);
  }
}


// eslint-disable-next-line new-cap
const list = new LinkList();
list.push(12);
list.push(143);
console.log(list);
list.listInsert(2, 456);
list.show();
list.listDelete(2);
list.show();
