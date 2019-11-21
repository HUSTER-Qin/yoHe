// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.len = 0;
  }

  enQueue(val) {
    const newNode = new Node(val);
    if (this.rear) {
      this.rear.next = newNode;
      this.rear = newNode;
    } else {
      // eslint-disable-next-line no-multi-assign
      this.rear = this.head = newNode;
    }
    this.len++;
  }

  deQueue() {
    if (!this.len) return false;
    const node = this.head;
    this.head = this.head.next;
    this.len--;
    return node;
  }

  getHead() {
    if (this.len) return this.head;
    return false;
  }

  queueLength() {
    return this.len;
  }

  queueEmpty() {
    return !!this.len;
  }

  clearQueue() {
    this.head = null;
    this.rear = null;
    this.len = 0;
  }
}

const q = new Queue();
q.enQueue('12');
q.enQueue('34');
q.enQueue('56');
console.log(q.deQueue());
console.log(q);
