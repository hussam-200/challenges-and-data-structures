const stack = require("../StackAndQueue-Implementation/Stack")

class StackWithDeleteMiddle extends stack {
    constructor() {
        super();
    }

    deleteMiddle() {
        if (this.top === null) {
            return null;
        }
        if (this.top.next === null) {
            this.top=null;
            return null;
        }

        let current = this.top;
        let previous = null;
        let index = 0;
        let n = 0;

        while (current !== null) {
            current = current.next;
            n = n + 1;
        }
        if (n % 2 === 0) {
            n = n / 2;
        }
        else {
            n = (n - 1) / 2
        }
        current = this.top;
        while (current !== null && index !== n) {
            previous = current;
            current = current.next;
            index++;
        }
        previous.next = current.next;
        return;



    }
}
module.exports=StackWithDeleteMiddle;