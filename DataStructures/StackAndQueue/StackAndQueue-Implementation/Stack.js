const Node = require("./Node");
class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newnode = new Node(value);
        newnode.next = this.top;
        this.top = newnode;
    }
    pop() {
        if (this.top === null) {
            return "the stack list is empty"
        }
        const poped = this.top.value;

        this.top = this.top.next;

        return poped;

    }
    peek() {
        if (!this.top) {
            return null;
        } else {
            return this.top.value;
        }

    }
    isEmpty() {
        if (!this.top) {
            return true;
        }
        else {
            return false;
        }
    }
    print() {
        let current=this.top;
        let result = [];
        while (current) {
            result.push(current.value+" ->")
            current = current.next;
        }
        console.log(result.join(" "));

    }
}
module.exports=Stack;