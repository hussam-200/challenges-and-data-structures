const Node = require("./Node");

class linkedlist {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return true;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
           
        }
        current.next = newNode; return true;
    }

    printList() {
        let current = this.head;
        if (current === null) {
            throw new Error("this is empty linked list");
        }
        let result = '';
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;


        }
        result += "null";

        console.log("head ->", result);
    }
    remove(data) {
        if (this.head === null) {
            console.log("this list empty");
            return false;
        }
        if (this.head.data === data) {
            this.head = this.head.next
            return true;
        }

        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.data === data) {
                previous.next = current.next;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }


    includes(data) {
        if (this.head === null) {
            throw new Error("this empty list");
        }

        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }


    insertAt(data, index) {
        let newNode = new Node(data);
        if (index < 0) {
            return false;
        }
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let i = 0;
        while (current !== null && i < index - 1) {
            current = current.next;
            i++
        }
        if (current === null) {
            return false;
        }
        newNode.next = current.next;
        current.next = newNode;

    }
}


module.exports = linkedlist;