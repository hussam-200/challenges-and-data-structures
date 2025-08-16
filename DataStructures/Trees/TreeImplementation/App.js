const BinaryTree=require("./BinaryTree");
const BinarySearchTree=require("./BinarySearchTree");
const bTree=new BinaryTree(10);
const BinaryST=new BinarySearchTree(12);

// BinaryST.insert(10)
// BinaryST.insert(20)
// BinaryST.insert(18)
// BinaryST.insert(6)
// BinaryST.insert(9)
// BinaryST.insert(8)

// BinaryST.print()


BinaryST.add(10)
BinaryST.add(20)
BinaryST.add(18)
BinaryST.add(6)
BinaryST.add(9)
BinaryST.add(8)
BinaryST.print()

console.log(BinaryST.Contains(6));

console.log("inOrder Tree ");
console.log(BinaryST.inOrderTravisal(BinaryST.root));

console.log("PreOrder Tree ");
console.log(BinaryST.inPreTravisal(BinaryST.root));


console.log("PostOrder Tree ");
console.log(BinaryST.inPostTravisal(BinaryST.root));


console.log(BinaryST.Contains(6));
BinaryST.Remove(6)
BinaryST.print()
