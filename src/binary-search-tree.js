const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }

}

class BinarySearchTree {
  constructor () {
    this.rootA = null
  }
  root() {
    if (this.rootA === null) {
      return null
    } else {
      return this.rootA
    }
    
  }

  add(data) {
    this.rootA = pushInside(this.rootA, data)

    function pushInside(someNode, value) {
      if (!someNode) {
        someNode = new Node (data)
      }
      if (someNode.data === value) {
        return someNode
      }
      if (value < someNode.data) {
       someNode.left = pushInside(someNode.left, data)
      }
      if (value > someNode.data) {
        someNode.right = pushInside(someNode.right, data)
      }
      return someNode
    }
  }

  has(data) {
    return hasData(this.rootA, data)

    function hasData (node, value) {
      if (!node) {
        return false
      }

      if (node.data === value) {
        console.log('this is true');
        return true
      }
      if (value < node.data) {
        console.log('LESS');
        return hasData(node.left, value)
      } else  {
        console.log('bigger');     
        return hasData(node.right, value)
      } 
      
    }
    
  }

  find(data) {
    return findNode(this.rootA, data)

    function findNode (node, value) {
      if (!node) {
        return null
      }

      if (node.data === value) {
        console.log('this is true');
        return node
      }
      if (value < node.data) {
        console.log('LESS');
        return findNode(node.left, value)
      } else  {
        console.log('bigger');     
        return findNode(node.right, value)
      } 
      
    }
    
  }

  remove(data) {
    
  }

  min() {
    return findMin (this.rootA)
    function findMin (value) {
      if (!value) {
        return null
      }
      if (value.left === null) {
        return value.data
      } else {
        return findMin(value.left)
      }
    }

  }
  max() {
        return findMax (this.rootA)
    function findMax (value) {
      if (!value) {
        return null
      }
      if (value.right === null) {
        return value.data
      } else {
        return findMax(value.right)
      }
      
    }
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree()
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);

// console.log(tree.max());

