const Node=require("./Node");
class Queue{
    constructor(){
        this.top=null;
    }
    enqueue(value){
        let newnode=new Node(value);
        if (!this.top) {
            this.top = newnode;
            return;
        }
        let current = this.top;
        while (current.next !== null) {
            current=current.next;
        }
        current.next=newnode;

        return newnode;

    }
    dequeue(){
        if(!this.top){
            return "empty queue list"
        }
        const result=this.top.value;
        this.top=this.top.next;

        return result;

    }
    peek(){
       if(!this.top){
        return null;
       }
       else{
        return this.top.value;
       }
    }
    isEmpty(){
       if (!this.top) {
            return true;
        }
        else {
            return false;
        }
    }
    printq(){
        let  current=this.top;

        let result=[];

        while(current!==null){
            result.push(current.value+" ->");
            current=current.next;
        }
        console.log(result.join(" "));
        
    }
}
module.exports=Queue;