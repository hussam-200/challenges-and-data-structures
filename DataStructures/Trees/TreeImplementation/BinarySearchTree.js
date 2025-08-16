const BinaryTree = require("./BinaryTree");
const TNode = require("./TNode");

class BinarySearchTree extends BinaryTree {
    constructor(rootValue = null) {
         super();
         if (rootValue !== null) {
        this.root = new TNode(rootValue);
    }
    }

    add(value) {
        if (this.root === null) {
            this.root = new TNode(value)
            return;
        }
        this.addRecursive(this.root, value)

    }
    addRecursive(node, value) {
        if (value < node.value) {
            if (!node.left) {
                node.left = new TNode(value)
            } else {
                this.addRecursive(node.left, value)
            }
        } else {
            if (!node.right) {
                node.right = new TNode(value)
            } else {
                this.addRecursive(node.right, value)
            }

        }
    }

   Remove(value) {
        this.root = this.RemoveRecursive(this.root, value);
    }

    RemoveRecursive(node, value) {
        if (!node) return null;

        if (value < node.value) node.left = this.RemoveRecursive(node.left, value);
        else if (value > node.value) node.right = this.RemoveRecursive(node.right, value);
        else {
            // العقدة المراد حذفها
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // فرعين
            let successor = this.findMin(node.right);
            node.value = successor.value;
            node.right = this.RemoveRecursive(node.right, successor.value);
        }
        return node;
    }

    findMin(node) {
        while (node.left) node = node.left;
        return node;
    }


    Contains(value) {

        return this.containsRecursive(this.root, value)
    }
    containsRecursive(node, value) {
        if (!node) {
            return false;
        }
        if (value === node.value) {
            return true;
        }
        else if (value < node.value) {
            return this.containsRecursive(node.left, value)

        } else {
            return this.containsRecursive(node.right, value)
        }
    }
}
module.exports = BinarySearchTree;