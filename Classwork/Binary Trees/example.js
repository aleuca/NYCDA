"use strict"

// binary search tree node
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insertRecursive(newValue) {
      //condition ? value_if_true : value_if_false
      const direction = newValue < this.value ? "left" : "right";

      /*let direction;
      if (newValue < this.value) {
        direction = "left";
      } else {
        direction = "right";
      }*/

      if (this[direction] === null) {
        this[direction] = new TreeNode(newValue);
      } else {
        this[direction].insertRecursive(newValue);
      }
      //this["direction"] === this.direction
      //this[direction]
    }

    insertIterative(newValue) {
      let direction = newValue < this.value ? "left" : "right";
      let currentNode = this;

      while (currentNode[direction] !== null) {
        currentNode = currentNode[direction];

        direction = newValue < currentNode.value ? "left" : "right";
      }

      currentNode[direction] = new TreeNode(newValue);
    }


}

let tree = new TreeNode(16)
tree.insertRecursive(7)
tree.insertRecursive(18)
tree.insertRecursive(4)
tree.insertRecursive(44)
console.log(tree)


const util = require("util"); // magic, don't worry about it (yet)

// binary search tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertRecursive(newValue) {
    //condition ? value_if_true : value_if_false
    const direction = newValue < this.value ? "left" : "right";

    /*let direction;
    if (newValue < this.value) {
      direction = "left";
    } else {
      direction = "right";
    }*/

    if (this[direction] === null) {
      this[direction] = new TreeNode(newValue);
    } else {
      this[direction].insertRecursive(newValue);
    }
    //this["direction"] === this.direction
    //this[direction]
  }

  insertIterative(newValue) {
    let direction = newValue < this.value ? "left" : "right";
    let currentNode = this;

    while (currentNode[direction] !== null) {
      currentNode = currentNode[direction];

      direction = newValue < currentNode.value ? "left" : "right";
    }

    currentNode[direction] = new TreeNode(newValue);
  }

  containsRecursive(searchValue) {
    // returns true if the tree contains the given value - otherwise returns false
  }

  containsIterative(searchValue) {

  }

  // used to visualize the whole tree
  dump() {
    console.log(
      util.inspect(this, {
        colors: true,
        depth: null // unlimited depth
      })
    );
  }
}

let tree = new TreeNode(10);

for (const num of [ 6, 16, 9, 7, 5, 20, 18, 19, 23, -1 ]) {
  tree.insertIterative(num);
}

tree.dump();

console.log(tree.contains(6)); // true
console.log(tree.contains(21)); // false
console.log(tree.contains(5)); // false
console.log(tree.contains(18)); // true
console.log(tree.contains(-1)); // true
console.log(tree.contains(-2)); // false

