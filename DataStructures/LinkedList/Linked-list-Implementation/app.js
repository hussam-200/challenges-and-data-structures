const Linkedlist = require("./Linkedlist");
const reverseList = require("./reverse/reverse");

const list = new Linkedlist();
list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.add(30);

list.printList();

list.remove(10);
list.printList();

console.log(list.includes(20)); 
console.log(list.includes(10)); 

list.insertAt(15, 2);
list.printList();

const reverser = new reverseList();

const result = reverser.reverse(list);

console.log("Does the list contain duplicates?",result.Duplicate);
result.Listrev.printList()
