const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// const { testOptional, ListNode } = require('../extensions/index.js');

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);



function removeKFromList(l, k) {
  let current = l
  let prev = null
  
  function logA () {
    if (this.value === k) {
       if (prev === null) {
        this.value = this.next.value
        this.next = this.next.next
        prev = current
       } else {
        prev.next = this.next
       }
    } else {
      prev = current
    }
    current = current.next
  }
  

  while (current) {
    logA.call(current)

  }

  console.log(l);
  return l

  
}

module.exports = {
  removeKFromList
};

// removeKFromList(initial, 3)