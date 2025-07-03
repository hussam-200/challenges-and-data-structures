const LinkedList = require("../Linkedlist");
const rotate=require("../rotateLinkedList/rotateLinkedList")
test('1.  test when normal case', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const newrotate = new rotate();
    const result = newrotate.rotate(list,1);

    expect(result.head.data).toBe(2);
    expect(result.head.next.data).toBe(3);
    expect(result.head.next.next.data).toBe(1);
    expect(result.head.next.next.next).toBe(null);
});
test('2. test when the k equal 0 ', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const newrotate = new rotate();
    const result = newrotate.rotate(list,0);

    expect(result.head.data).toBe(1);
    expect(result.head.next.data).toBe(2);
    expect(result.head.next.next.data).toBe(3);
    expect(result.head.next.next.next).toBe(null);
});
test('3. test when the k biger than length of list ', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const newrotate = new rotate();
    const result = newrotate.rotate(list,4);

    expect(result.head.data).toBe(2);
    expect(result.head.next.data).toBe(3);
    expect(result.head.next.next.data).toBe(1);
    expect(result.head.next.next.next).toBe(null);
});
test('4. test when the k equal -', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const newrotate = new rotate();
    const result = newrotate.rotate(list,-1);

    expect(result.head.data).toBe(3);
    expect(result.head.next.data).toBe(1);
    expect(result.head.next.next.data).toBe(2);
    expect(result.head.next.next.next).toBe(null);
});