const BinaryTree = require("../BinaryTree")
const TNode = require("../TNode");
class LeafSumBT extends BinaryTree {
    constructor(rootValue = null) {
        super();
        if (rootValue !== null) {
            this.root = new TNode(rootValue);
        }

    }

    LeafSum(root = this.root) {
        if (!root) {
            return 0;
        }
        this.Sum = 0;
        this.LeafSumHellper(root);
        return this.Sum
    }
    LeafSumHellper(node) {
        if (!node.left && !node.right) {
            this.Sum += node.value;
        }
        if (node.left) this.LeafSumHellper(node.left)
        if (node.right) this.LeafSumHellper(node.right)

    }


}
module.exports = LeafSumBT;