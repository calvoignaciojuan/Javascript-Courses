class node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class MySingleLinkedList {

    constructor(value){
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }

    lastNode(head){
        if(head.next){
            return(this.lastNode(head.next));
        }
        return (head);
    }

    append(value){
        const newNode = new node(value);
        let lastNode = this.lastNode(this.head);
        lastNode.next = newNode;
        this.tail = newNode;

        this.length++;
        return(this);
    }

    prepend(value){
        const newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
        this. length++;
        return(this);
    }

    insert(index,value){        
        
        if(index ===0 ){
            return (this.prepend(value));
        }
        if(index >= this.length){
            return(this.append(value));
        }

        const newNode = new node(value);
        const prevNode = this.getNodebyIndex(index-1);

        newNode.next  = prevNode.next;
        prevNode.next = newNode;
        this.length++;
    }

    getNodebyIndex(index){

        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode=currentNode.next;
            counter++; 
        }
        return(currentNode);
    }

    removeNode(index){
        if(index > this.length-1){
            return undefined;
        }

        if(index===0){
            const deletedNode = this.head;
            this.head=this.head.next;
            this.length--;
            return (deletedNode);            
        }

        if(index === this.length-1){
            const prevNode = this.getNodebyIndex(index-1);
            this.tail = prevNode;
            this.length--;
            return (deletedNode);
        }

        const prevNode = this.getNodebyIndex(index-1);
        const deletedNode = prevNode.next;
        const nextNode = deletedNode.next;
    
        prevNode.next = nextNode;
              
        this.length--;
        return (deletedNode);
    }
}

const lista = new MySingleLinkedList(2);
lista.append(3);
lista.append(4);
lista.prepend(0);
console.log(lista);

lista.insert(1,1);
console.log(lista);

lista.removeNode(2);

console.log(lista);