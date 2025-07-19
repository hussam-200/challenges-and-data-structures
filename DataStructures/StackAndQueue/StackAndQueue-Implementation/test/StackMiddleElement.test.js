const StackWithDeleteMiddle = require("../../DeleteMiddleELement/DeleteMiddleElement")

test("push to the stack list", () => {
    const stackDelete = new StackWithDeleteMiddle();

    stackDelete.push(1);
    stackDelete.push(2);
    stackDelete.push(3);

    stackDelete.deleteMiddle();


    expect(stackDelete.top.value).toBe(3);
    expect(stackDelete.top.next.value).toBe(1);

})
test("push to the stack list", () => {
    const stackDelete = new StackWithDeleteMiddle();

    stackDelete.push(1);
    stackDelete.push(2);
    stackDelete.push(3);
    stackDelete.push(4);

    stackDelete.deleteMiddle();

    expect(stackDelete.top.value).toBe(4);
    expect(stackDelete.top.next.value).toBe(3);
    expect(stackDelete.top.next.next.value).toBe(1);

})
test("push to the stack list", () => {
    const stackDelete = new StackWithDeleteMiddle();
    stackDelete.deleteMiddle();

    expect(stackDelete.top).toBeNull();

})
test("push to the stack list", () => {
    const stackDelete = new StackWithDeleteMiddle();
    stackDelete.push(1);
    const result = stackDelete.deleteMiddle();
    expect(result).toBe(null);

})