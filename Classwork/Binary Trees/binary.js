// "use strict"

// // binary search tree node
// class TreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }

//     insertRecursive(newValue) {
//       //condition ? value_if_true : value_if_false
//       const direction = newValue < this.value ? "left" : "right";

//       if (this[direction] === null) {
//         this[direction] = new TreeNode(newValue);
//       } else {
//         this[direction].insertRecursive(newValue);
//       }
//     }

//     searchRecursive(searchValue) {
//         const searchDirection = searchValue < this.value ? "left" : "right"

//         if (this.value === searchValue) {
//             console.log(true)
//             return true
//         } else {
//             if (this[searchDirection] === null) {
//                 console.log(false)
//                 return false
//             } else {
//                 this[searchDirection].searchRecursive(searchValue)
//             }
//         }
//     }
// }

// let tree = new TreeNode(16)
// tree.insertRecursive(7)
// tree.insertRecursive(18)
// tree.insertRecursive(4)
// tree.insertRecursive(44)
// console.log(tree)
// tree.searchRecursive(18)



class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
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

    searchIterative(searchValue) {
        let searchDirection = searchValue < this.value ? "left" : "right";
        let searchNode = this;


        if (searchValue === this.value) {
            console.log(true)
            return true
        } else {
            while(searchNode[searchDirection] !== null) {
                searchNode = searchNode[searchDirection]
                searchDirection = searchValue < searchNode.value ? "left" : "right";
                if (searchNode.value === searchValue) {
                    console.log(true)
                    return true
                }
            }
            console.log(false)
            return false
        }
    }

    toSortArray() {
        let result = []
        if (this.left) {
           result = result.concat(this.left.toSortArray())
        }

        result.push(this.value)

        if (this.right) {
            result = result.concat(this.right.toSortArray())
        }
        console.log(result)
        return result
    }

}

let tree = new TreeNode(16)
tree.insertIterative(7)
tree.insertIterative(18)
tree.insertIterative(4)
tree.insertIterative(44)
console.log(tree)
tree.searchIterative(44)
tree.toSortArray()

