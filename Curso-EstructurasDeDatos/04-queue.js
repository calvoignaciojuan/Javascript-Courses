class node{

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue{

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new node(value);
        
        if(this.length===0){
            this.first = newNode;          
        }else{
            this.last.next = newNode;            
        }
        this.last = newNode;
        this.length++;
        return this;
    
    }

    dequeue(){
        if(this.length){ //if there are items
            //const deletedNode = this.top;
            if(this.length===1){ //if only have one item
                this.first = null;
                this.last = null;
               
            }else{
                this.first = this.first.next;
            }            
            this.length--;
            return this;
        }
        return null
        
    }
}

const fila = new queue();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);

fila.dequeue();