const BinarySearchTree = require("../BinarySearchTree")
class BST extends BinarySearchTree {
    constructor() {
        super()
    }

    SecondMaxValue() {
        if (this.root === null) {
            return null
        }
        if (this.root.left === null && this.root.right === null) {
            return null;
        }

        let current = this.root;
        let previous = null;
        while (current.right !== null) {
            previous = current;
            current = current.right
        }
        if (current.left !== null) {
            current = current.left;
            while (current.right !== null) {
                current = current.right;
                previous = current;

            }
        }
        return previous.value;
    }
}
module.exports = BST;