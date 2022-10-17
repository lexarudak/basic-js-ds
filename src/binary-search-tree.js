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
        return true
      }
      if (value < node.data) {
        return hasData(node.left, value)
      } else  {
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
        return node
      }
      if (value < node.data) {
        return findNode(node.left, value)
      } else  {  
        return findNode(node.right, value)
      } 
      
    }
    
  }

  remove(data) {
    this.rootA = del(this.rootA, data) 
    function del (node, value) {
      if (!node) {
        return null
      }

      if (value < node.data) {
        node.left = del(node.left, value)
        return node
      } else {
      if (value > node.data) {
        node.right = del(node.right, value)
        return node
      } else {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.right === null && node.left !== null) {
          return node.left
        }
        if (node.left === null && node.right !== null) {
          return node.right
        }
        if (node.left && node.right) {
          let minRight = node.right
          while(minRight.left) {
            minRight = minRight.left
          }
          node.data = minRight.data
          node.right = del(node.right, minRight.data)
          return node
        }
      }
    }
    

    }
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
  info() {
    console.log(this.rootA);
    console.log('----------------------');
    
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree()
// tree.info()
// tree.add(9);
// tree.info()
// tree.add(14);
// tree.info()
// tree.add(54);
// tree.info()
// tree.add(2);
// tree.info()
// tree.add(6);
// tree.info()
