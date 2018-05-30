export default class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = value;
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`;
    }

    
}

export default class LinkedList{
    constructor (){
        this.head = null;
    }

    append(value){
        if(this.head === null){
            head = new Node(data);
            return;
        }

        currentNode = this;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new Node(data);

    }

    prepend(value){
        newHead = new Node(value);
        newHead.next = head;
        head = newHead;
    }

    deleteWithValue(data){
        if(head === null)return;

        if(head.data === data){
            head = head.next;
            return;
        }

        current = this.head;
        while(current.next !== null){
            if(current.next.data == data){
                current.next = current.next.next;
            }
        }
    }
}