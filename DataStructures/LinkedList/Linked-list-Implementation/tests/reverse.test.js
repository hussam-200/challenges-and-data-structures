const ReverseList = require("../reverse/reverse");
const LinkedList = require("../Linkedlist");

test('1. should reverse a non-empty list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const reverser = new ReverseList();
    const result = reverser.reverse(list);

    expect(result.Duplicate).toBe(false);
    expect(result.Listrev.head.data).toBe(3);
    expect(result.Listrev.head.next.data).toBe(2);
    expect(result.Listrev.head.next.next.data).toBe(1);
    expect(result.Listrev.head.next.next.next).toBe(null);
});
  test('2. should not change a single-node list', () => {
    const list = new LinkedList();
    list.add(42);

    const reverser = new ReverseList();
    const result = reverser.reverse(list);

    expect(result.Duplicate).toBe(false);
    expect(result.Listrev.head.data).toBe(42);
    expect(result.Listrev.head.next).toBe(null);
  });
  test('3. should return null when list is empty', () => {
    const list = new LinkedList();

    const reverser = new ReverseList();
    const result = reverser.reverse(list);

    expect(result.Listrev).toBe(null);
    expect(result.Duplicate).toBe(false);
  });
test('4. should reverse a non-empty list with Duplicate', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);

    const reverser = new ReverseList();
    const result = reverser.reverse(list);

    expect(result.Duplicate).toBe(true);
    expect(result.Listrev.head.data).toBe(3);
    expect(result.Listrev.head.next.data).toBe(2);
    expect(result.Listrev.head.next.next.data).toBe(2);
    expect(result.Listrev.head.next.next.next.data).toBe(1);
    expect(result.Listrev.head.next.next.next.next).toBe(null);
})