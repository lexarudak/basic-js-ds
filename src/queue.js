const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class ListNode {
  constructor (value) {
    this.value = value,
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.length = 0
  }

  getUnderlyingList() {
    console.log(this.head);
    return this.head
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode (value)
      this.length++
    } else {
    let current = this.head

      while (current.next) {
          current = current.next
      }
      current.next = new ListNode (value)
      this.length++
    }
  }

  dequeue() {
   if (this.head !== null) {
     const toRet = this.head.value
     this.head.value = this.head.next.value
     this.head.next = this.head.next.next
     this.length--

     return toRet
   } else {
     return false
   }
  } 
}

module.exports = {
  Queue
};

// const queue = new Queue()
//     queue.enqueue(5);
//     queue.enqueue(6);
//     queue.enqueue(7);
//     queue.dequeue()
//     queue.dequeue()