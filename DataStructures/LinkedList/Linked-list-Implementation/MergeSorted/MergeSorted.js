const Node = require("../Node")
const Linkedlist=require("../Linkedlist")
class mergelist {

    mergeStoredList(list, list2) {

       const newnode=new Node(0);
       let tail=newnode;
        if (list.head === null || list2.head === null) {
            return false;
        }
        if (list.head === null && list2.head === null) {
            return false;
        }

        let current1 = list.head;
        let current2 = list2.head;

       while (current1!==null&&current2!==null){
        if(current1.data<current2.data){
            tail.next=new Node(current1.data);
            current1=current1.next;
        }
        else{
            tail.next=new Node(current2.data);
            current2=current2.next;
        }
       tail=tail.next;
       } 
       while(current1!==null){
        tail.next=new Node(current1.data);
        tail=tail.next;
        current1=current1.next;
       }
       while(current2!==null){
        tail.next=new Node(current2.data);
        tail=tail.next;
        current2=current2.next;
       }
        const merge=new Linkedlist();
        merge.head=newnode.next;
        return merge;
    }
}

module.exports = mergelist;