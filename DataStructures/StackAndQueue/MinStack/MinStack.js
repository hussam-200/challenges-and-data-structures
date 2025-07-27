const stack = require("../StackAndQueue-Implementation/Stack")

class MinStack {
    constructor() {
        this.listStack = [];
        this.MinNum = [];
        this.valueStack = 0;
        this.MinValue = 0;

    }

    push(value) {
        this.listStack.push(value);
        if (this.MinNum.length === 0 || this.getMin() >= value) {
            this.MinNum.push(value)
        }
    }
    pop() {
        if (this.listStack.length === 0) {
            return null;
        }
        const remove = this.listStack.pop();

        if (remove === this.MinNum[this.MinNum.length - 1]) {
            this.MinNum.pop();
        }
        return remove;
    }
    top() {
        if (this.listStack.length === 0) {
            return null
        }
        return this.listStack[this.listStack.length - 1]
    }
    getMin() {
        if (this.MinNum.length === 0) {
            return null
        }

        return this.MinNum[this.MinNum.length - 1];
    }
    isEmpty(){
        if(this.listStack.length === 0){
            return true
        }else{
            return false
        }
    }
    printStack() {
        let result = "stack :"

       for(let i=0 ; i < this.listStack.length ; i++){
        result += this.listStack[i] + " -> ";
       }

        return result;
    }
}

module.exports = MinStack;