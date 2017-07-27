/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.array = [];
  }
  add(value) {
    return this.array.push(value);
  }
  remove() {
    return this.array.pop();
  }
  get size() {
    return this.array.length;
  }
  peek() {
    return this.array;
  }
}

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  enqueue(element) {
    this.inbox.add(element);
  }
  dequeue() {
    if (this.outbox.size === 0) {
      while(this.inbox.size) {
        this.outbox.add(this.inbox.remove());
      }
    }
    return this.outbox.remove();
  }
  get size() {
    return (this.inbox.size + this.outbox.size);
  }
  peek() {
    return this.outbox.peek();
  }
}
