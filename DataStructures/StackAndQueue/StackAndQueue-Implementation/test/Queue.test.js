const Queue = require("../Queue");

test("new queue list", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);

    expect(queue.top.value).toBe(2);
    expect(queue.top.next.value).toBe(4);
    expect(queue.top.next.next.value).toBe(6);
})
test("dequeue of queue list", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);

    queue.dequeue();

    expect(queue.top.value).toBe(4);
    expect(queue.top.next.value).toBe(6);
})
test("new queue list", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);
    queue.peek();

    expect(queue.top.value).toBe(2);
})
test("new queue list", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);
    
    expect(queue.isEmpty()).toBe(false);
    
})