const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;

  constructor() {
    this.head = new ListNode();
    this.head.value = null;
    this.head.next = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let curNode = this.head;

    if (curNode.value === null) {
      curNode.value = value;

      return;
    }

    while (curNode.next != null) {
      curNode = curNode.next;
    }

    curNode.next = new ListNode(value);
    curNode.next.next = null;

    return;
  }

  dequeue() {
    if (this.head == null || this.head.next == null) {
      this.head = null;

      return null;
    } else {
      let valueToReturn = this.head.value;

      this.head = this.head.next;

      return valueToReturn;
    }


  }
}

module.exports = {
  Queue
};
