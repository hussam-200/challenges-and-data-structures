const BinaryTree = require("../../../Trees/TreeImplementation/BinaryTree")

test('insert data for Binary Tree', () => {
    const BT = new BinaryTree(10);
    BT.insert(5);
    BT.insert(12);
    BT.insert(6);
    BT.insert(11);
    BT.insert(4);
    expect(BT.inOrderTravisal(BT.root)).toEqual([6, 5, 11, 10, 4, 12]);
    expect(BT.inPreTravisal(BT.root)).toEqual([ 10, 5, 6, 11, 12, 4 ]);
    expect(BT.inPostTravisal(BT.root)).toEqual([ 6, 11, 5, 4, 12, 10 ]);
});
