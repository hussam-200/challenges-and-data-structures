const LeafSumBT = require("../../../Trees/TreeImplementation/LeafSum/LeafSum")
    const TNode = require("../../../Trees/TreeImplementation/TNode");

test('Sum Leaf of tree Binary ', () => {
    const LeafSum = new LeafSumBT(9);

    LeafSum.root.left = new TNode(8);
    LeafSum.root.right = new TNode(12);
    LeafSum.root.left.left = new TNode(3);
    LeafSum.root.left.right = new TNode(7);
    LeafSum.root.right.left = new TNode(17);
    LeafSum.root.right.right = new TNode(23);
    LeafSum.root.left.left.right = new TNode(4);

    expect(LeafSum.LeafSum()).toBe(51);

});
test('Sum Leaf of tree Binary ', () => {
    const LeafSum = new LeafSumBT(9);

    LeafSum.root.left = new TNode(8);
    LeafSum.root.right = new TNode(12);
    LeafSum.root.left.left = new TNode(3);
    LeafSum.root.left.right = new TNode(-7);
    LeafSum.root.right.left = new TNode(-17);
    LeafSum.root.right.right = new TNode(-23);
    LeafSum.root.left.left.right = new TNode(-4);

    expect(LeafSum.LeafSum()).toBe(-51);

});