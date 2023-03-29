class node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class MyDoubleLinkedList {

    constructor(value){
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }
   
    //agrega un valor al final de la lista
    append(value){
        const newNode = new node(value);
       
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;
        return(this);
    }

    //agrega un valor al principio de la lista
    prepend(value){
        const newNode = new node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
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

        newNode.next      = prevNode.next;
        newNode.next.prev = newNode;
        newNode.prev      = prevNode;
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
            this.head.prev = null;

            this.length--;
            return (deletedNode);            
        }

        const prevNode = this.getNodebyIndex(index-1);
        
        if(index === this.length  ){            
            prevNode.next = null;
            this.tail = prevNode;
            this.length--;
            return (deletedNode);
        }

        const deletedNode = prevNode.next;
        const nextNode = deletedNode.next;
    
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
              
        this.length--;
        return (deletedNode);
    }
}

const lista = new MyDoubleLinkedList(2);
lista.append(3);
lista.append(4);
lista.prepend(0);
//console.log(lista);

lista.insert(1,1);
console.log(lista);

lista.removeNode(2);

console.log(lista);