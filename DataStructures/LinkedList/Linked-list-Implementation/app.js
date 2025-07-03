const Linkedlist = require("./Linkedlist");
const reverseList = require("./reverse/reverse");
const mergelist = require("./MergeSorted/MergeSorted")
const rotateLinkedList=require("./rotateLinkedList/rotateLinkedList")
const list = new Linkedlist();
list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.add(30);

list.printList();
const list2 = new Linkedlist();
list2.add(4);
list2.add(8);
list2.add(18);
list2.add(25);
list2.add(35);

list2.printList();

list.remove(10);
list.printList();

console.log(list.includes(20));
console.log(list.includes(10));

list.insertAt(15, 2);
list.printList();

const reverser = new reverseList();

const result = reverser.reverse(list);

console.log("Does the list contain duplicates?", result.Duplicate);
result.Listrev.printList()
const list1 = new Linkedlist();
list1.add(5);
list1.add(10);
list1.add(20);
list1.add(30);
list1.add(30);
console.log("first list :");
list1.printList();
const list3 = new Linkedlist();
list3.add(4);
list3.add(8);
list3.add(18);
console.log("secound list : ");
list3.printList();
const merge = new mergelist();
const resultmerge = merge.mergeStoredList(list1, list3);
console.log("result of merge listes:");

resultmerge.printList();

const rotate=new rotateLinkedList();
const value=rotate.rotate(resultmerge,0);
console.log("linkedlist after rotate :");

value.printList();