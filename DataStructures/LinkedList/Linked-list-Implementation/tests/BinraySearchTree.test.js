const BinarySearchTree = require("../../../Trees/TreeImplementation/BinarySearchTree")

test('Add data for Binary Tree', () => {
    const BST = new BinarySearchTree(10);
    BST.add(5);
    BST.add(12);
    BST.add(4);
    BST.add(11);
    BST.add(6);
    expect(BST.inOrderTravisal(BST.root)).toEqual([4, 5, 6, 10, 11, 12]);
    expect(BST.inPreTravisal(BST.root)).toEqual([10, 5, 4, 6, 12, 11]);
    expect(BST.inPostTravisal(BST.root)).toEqual([4, 6, 5, 11, 12, 10]);
});
test('Add data for Binary Tree', () => {
    const BST = new BinarySearchTree(10);
    BST.add(5);
    BST.add(12);
    BST.add(4);
    BST.add(11);
    BST.add(6);
    BST.Remove(6);
    expect(BST.inOrderTravisal(BST.root)).toEqual([4, 5, 10, 11, 12]);
    expect(BST.inPreTravisal(BST.root)).toEqual([10, 5, 4, 12, 11]);
    expect(BST.inPostTravisal(BST.root)).toEqual([4, 5, 11, 12, 10]);
});
test('Add data for Binary Tree', () => {
    const BST = new BinarySearchTree(10);
    BST.add(5);
    BST.add(12);
    BST.add(4);
    BST.add(11);
    BST.add(6);
    expect(BST.Contains(6)).toBe(true);
    BST.Remove(6);
    expect(BST.Contains(6)).toBe(false);
    
});