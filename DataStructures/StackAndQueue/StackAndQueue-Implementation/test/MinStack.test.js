const Stack=require("../../MinStack/MinStack")

test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
   MinStack.push(1);
   MinStack.push(2);
   MinStack.push(3);
   MinStack.push(4);
   expect(MinStack.listStack).toEqual([1,2,3,4]);
   
})
test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
   MinStack.push(1);
   MinStack.push(2);
   MinStack.push(3);
   MinStack.push(4);
   MinStack.pop();
   expect(MinStack.listStack).toEqual([1,2,3]);
   
})
test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
   MinStack.push(1);
   MinStack.push(2);
   MinStack.push(3);
   MinStack.push(4);
   
   expect(MinStack.top()).toBe(4);
   
})
test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
   MinStack.push(1);
   MinStack.push(2);
   MinStack.push(3);
   MinStack.push(4);
  
   expect( MinStack.getMin()).toBe(1);
   
})
test("new Min value of Empty stack list", () => {
    let MinStack = new Stack();
    
   MinStack.push(1);
   MinStack.push(2);
   MinStack.push(3);
   MinStack.push(4);
   
   expect(MinStack.isEmpty()).toBe(false);
   
})
