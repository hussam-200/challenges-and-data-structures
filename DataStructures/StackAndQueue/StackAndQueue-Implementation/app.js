const Stack = require("./Stack");
const Queue=require("./Queue");

const stack = new Stack();
const queue=new Queue();

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







