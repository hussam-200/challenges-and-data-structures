const TNode = require("./TNode");

class BinaryTree {
    constructor(root) {
        this.root = new TNode(root);
    }
    insert(value) {
        this.insertHelperNode(this.root, value);
    }

    insertHelperNode(node, value) {
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (!current.left) {
                current.left = new TNode(value);
                break;
            } else {
                queue.push(current.left)
            }

            if (!current.right) {
                current.right = new TNode(value);
                break;
            } else {
                queue.push(current.right)
            }
        }

    }
    inOrderTravisal(node, result = []) {
        if (!node) { return result; }

        this.inOrderTravisal(node.left, result);
        result.push(node.value)

        this.inOrderTravisal(node.right, result)
        return result;
    }
    inPreTravisal(node, result = []) {
        if (!node) { return result; }
        result.push(node.value)

        this.inPreTravisal(node.left, result);
        this.inPreTravisal(node.right, result)

        return result;

    }
    inPostTravisal(node, result=[]) {
        if (!node) { return result; }

        this.inPostTravisal(node.left , result);
        this.inPostTravisal(node.right ,result)
        result.push(node.value)

        return result;

    }
    print(node = this.root, space = 0) {
        if (!node) return;
        space += 5;
        this.print(node.right, space);
        console.log(' '.repeat(space - 5) + node.value);
        this.print(node.left, space);
    }
}
module.exports = BinaryTree;