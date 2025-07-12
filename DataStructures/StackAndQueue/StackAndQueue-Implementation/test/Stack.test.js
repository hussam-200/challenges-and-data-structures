const Stack = require("../Stack");

test("push to the stack list", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);


    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(1);

})
test("pop the top node", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();

    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);

})
test("peek the top node", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.peek();

    expect(stack.top.value).toBe(3);
    

})
test("peek the top node", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.isEmpty()).toBe(false);
    

})
