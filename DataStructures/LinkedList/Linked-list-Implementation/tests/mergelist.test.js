const mergelist = require("../MergeSorted/MergeSorted");
const LinkedList = require("../Linkedlist")
test("new merge list", () => {
      const list1 = new LinkedList();
    const list2 = new LinkedList();
    const merge = new mergelist();

    const result = merge.mergeStoredList(list1, list2);
    expect(result).toBe(false);
})
test("new merge list", () => {
    const list1 = new LinkedList();
    list1.add(5);
    list1.add(10);
    list1.add(20);
    list1.add(30);
    list1.add(30);

    list1.printList();
    const list3 = new LinkedList();
    const merge=new mergelist();
    const result=merge.mergeStoredList(list1,list3);

        expect(result).toBe(false);


})
test("new merge list", () => {
    const list1 = new LinkedList();
    list1.add(5);
    list1.add(10);

    list1.printList();
    const list3 = new LinkedList();
    list3.add(4);
    list3.add(8);
    list3.add(18);

    const merge=new mergelist();
    const result=merge.mergeStoredList(list1,list3);
    expect(result.head.data).toBe(4);
    expect(result.head.next.data).toBe(5);
    expect(result.head.next.next.data).toBe(8);
    expect(result.head.next.next.next.data).toBe(10);
    expect(result.head.next.next.next.next.data).toBe(18);

    expect(result.head.next.next.next.next.next).toBe(null);
    

})


