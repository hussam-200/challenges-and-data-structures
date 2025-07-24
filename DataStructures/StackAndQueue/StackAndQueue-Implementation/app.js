const Stack = require("./Stack");
const Queue=require("./Queue");
const StackWithDeleteMiddle=require("../DeleteMiddleELement/DeleteMiddleElement")
const MinimunStack=require("../MinStack/MinStack");

const stack = new Stack();
const queue=new Queue();
const stackDelete=new StackWithDeleteMiddle();

stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);
stack.print();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(10);
queue.printq();


stack.pop();
stack.pop();
stack.print();
queue.dequeue();
queue.dequeue();
queue.printq();


console.log(stack.peek());
console.log(queue.peek());



console.log(stack.isEmpty());
console.log(queue.isEmpty());

stackDelete.push(2);
stackDelete.push(4);
stackDelete.push(6);
stackDelete.push(8);
console.log("this stack before delete middle (odd number)");
stackDelete.print();
stackDelete.deleteMiddle();
console.log("this stack after delete middle");
stackDelete.print();

stackDelete.push(10);
stackDelete.push(12);
console.log("this stack before delete middle (even number)");
stackDelete.print();
stackDelete.deleteMiddle();
console.log("this stack after delete middle");
stackDelete.print();

const MinStack=new MinimunStack();

MinStack.push(15);
MinStack.push(7);
MinStack.push(12);
MinStack.push(3);
console.log("stack list:");
MinStack.print();


console.log("Min Number in stack list:",MinStack.GetMin());

console.log("pop number of stack list:",MinStack.pop())
console.log("Min Number in stack list after poped :",MinStack.GetMin());
console.log("Peek Number in stack list:",MinStack.peek());
MinStack.push(2);
MinStack.print();
console.log("Min Number in stack list after push the new element (2):",MinStack.GetMin());


console.log("check if the stack list empty:",MinStack.isEmpty());







