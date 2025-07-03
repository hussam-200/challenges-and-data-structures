class rotateLinkedList {

    rotate(list, k) {
        let current = list.head;
        let previous = null;
        let oldhead = list.head;
        let i = 1;

        if (k === 0) {
            return list;
        }
        let length = 0;
        let tem = list.head;
        while (tem !== null) {
            length++;
            tem = tem.next
        }

        if (k < 0) {
            let y = 0;
            let num = length + k;
            while (current !== null && y < num) {
                previous = current;
                current = current.next;
                y++;
            }
            previous.next = null;
            let newhead = current;
            list.head = newhead;

            let tail = newhead;
            while (tail.next !== null) {
                tail = tail.next
            }
            tail.next = oldhead;
            return list;

        }


        if (k > length) {
            let y = 1;
            let num = k % length;
            while (current !== null && y <= num) {
                previous = current;
                current = current.next;
                y++;
            }
            previous.next = null;
            let newhead = current;
            list.head = newhead;

            let tail = newhead;
            while (tail.next !== null) {
                tail = tail.next;
            }

            tail.next = oldhead;

            return list;
        }

        while (current !== null && i <= k) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = null;
        let newhead = current;
        list.head = newhead;

        let tail = newhead;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = oldhead;
        return list;
    }
}
module.exports = rotateLinkedList;