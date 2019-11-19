class Stack {
  constructor() {
    this.len = 0;
    this.stack = [];
  }

  size() {
    return this.len;
  }

  push(val) {
    this.stack.unshift(val);
    this.len++;
  }

  pop() {
    if (!this.isEmpty()) return null;
    this.len--;
    return this.stack.shift();
  }

  isEmpty() {
    return this.len !== 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.pop();
console.log(s);
