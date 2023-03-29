class node{

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class stack{

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new node(value);
        if(this.length===0){
            this.bottom = newNode;
        }
        newNode.next = this.top;
        this.top = newNode;
       
        this.length++;
        return this;
    }

    pop(){
        if(this.length){ //if there are items
            //const deletedNode = this.top;
            if(this.length===1){ //if only have one item
                this.top = null;
                this.bottom = null;
               
            }else{
                this.top = this.top.next;
            }            
            this.length--;
            return this;
        }
        return null
        
    }
}

const pila = new stack();
pila.push(1);
pila.push(2);
pila.push(3);
pila.pop();