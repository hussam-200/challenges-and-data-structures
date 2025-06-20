class reverse {
   
    reverse(list) {
        if (list.head===null) {
          return  {
             Listrev: null, Duplicate: false
        };
        }

        if (list.head.next===null) {
            return{
             Listrev: list, Duplicate: false 
        };
        }

        let value = new Set();
        let check = list.head;
        let revDuplicate=false;
        while (check !== null) {
            if (value.has(check.data)) {
             revDuplicate=true;
            }else{
            value.add(check.data);}
            check = check.next;
         
        }
          
        let current = list.head;
        let previous = null;
        let nextnode = null;
        while (current !== null) {
            nextnode = current.next;
            current.next = previous;
            previous = current;
            current = nextnode;
        }
        list.head = previous;

        return {
             Listrev: list, Duplicate: revDuplicate 
        };
    }}


module.exports = reverse;
