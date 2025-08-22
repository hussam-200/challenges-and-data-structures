const BinaryTree = require("../BinaryTree");
const TNode = require("../TNode");
class SecondMaxValueBT extends BinaryTree {
    constructor(rootValue = null) {
        super();
        if (rootValue !== null) {
            this.root = new TNode(rootValue);
        }
    }

    SecondMax(root) {
        this.largest = null;
        this.secondLargest = null;
        this.traverse(root);
        return this.secondLargest;
    }

    traverse(node) {
        if (!node) return;

        if (this.largest === null || node.value > this.largest) {
            this.secondLargest = this.largest;
            this.largest = node.value;
        }
        else if (node.value < this.largest &&
            (this.secondLargest === null || node.value > this.secondLargest)) {
            this.secondLargest = node.value;
        }

        this.traverse(node.left);
        this.traverse(node.right);
    }
}

module.exports = SecondMaxValueBT;
