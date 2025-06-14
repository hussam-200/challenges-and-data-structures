const Linkedlist = require("./Linkedlist");


test('adds 4 element in linkedlist', () => {
    const list = new Linkedlist();
    expect(list.add(5)).toBe(true);
    expect(list.add(10)).toBe(true);
});
test('remove 1 element in linkedlist', () => {
    const list = new Linkedlist();
    list.add(10);
    expect(list.remove(10)).toBe(true);
    expect(list.remove(20)).toBe(false);
});
test('include the number', () => {
    const list = new Linkedlist();
    list.add(10);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(20)).toBe(false);
})
test('insertAt of the number', () => {
    const list = new Linkedlist();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    expect(list.insertAt(10,2)).toBe();
    expect(list.insertAt(30,-1)).toBe(false);
})