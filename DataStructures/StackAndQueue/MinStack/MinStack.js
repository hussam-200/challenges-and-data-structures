const Stack = require("../StackAndQueue-Implementation/Stack")
class MinStack extends Stack {
    constructor() {
        super();
    }

    GetMin() {
        if(this.top === null){
            return null;
        }
        if(this.top.next === null){
            return this.top.value
        }

        let current = this.top;
        let min = current.value;
        while (current !== null) {
            if (current.value < min) {
                min = current.value;
            }
            current = current.next;

        }
        return min;
    }


}
module.exports = MinStack;