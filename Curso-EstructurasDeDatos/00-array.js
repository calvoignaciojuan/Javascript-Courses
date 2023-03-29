class MyArray{

    constructor(){
        this.length =0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

	//agrega un elemento al final del array
    push(element){
        this.data[this.length]=element;
        this.length++;
        return (this.data);
    }

	//elimina el elemento del final del array
    pop(){
        const lastElement = this.data[this.length-1];
        delete(this.data[this.length-1]);
        this.length--;
        return(lastElement);
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return (item);
    }

    shiftIndex(index){
        for(let i =index; i<= this.length-2;i++){
            this.data[i]=this.data[i+1];
        }
        delete(this.data[this.length-1]);
        this.length--;
    }

    //agrega elemento al inicio
    unshift(element){
        for(let i = this.length; i > 0; i--){
            this.data[i]=this.data[i-1];
        }
        this.data[0]=element;
        this.length ++;
    }

    //elimina primer elemento
    shift(){
        const item = this.data[0];
        this.shiftIndex(0);
        return item;
    }   
}

const myArray = new MyArray;

myArray.push("juan");
myArray.push("juan1");
myArray.push("juan2");

myArray.unshift("flor");

console.log(myArray);

myArray.shift();

console.log(myArray);
