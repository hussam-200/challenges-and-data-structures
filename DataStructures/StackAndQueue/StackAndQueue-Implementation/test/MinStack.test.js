const Stack=require("../../MinStack/MinStack")

test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
    MinStack.GetMin();

    expect(MinStack.top).toBe(null);
   
})
test("new Min value when stack have one element list", () => {
    let MinStack = new Stack();
    MinStack.push(1)
    MinStack.GetMin();

    expect(MinStack.top.value).toBe(1);
   
})
test("new Min value when stack have multi element list", () => {
    let MinStack = new Stack();
    MinStack.push(3);
    MinStack.push(4);
    MinStack.push(8);
    MinStack.push(10);

    const min=MinStack.GetMin();

    expect(min).toBe(3);
   
})