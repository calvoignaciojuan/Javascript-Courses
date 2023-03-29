class HashTable{

    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }

    show(){
        console.log(this.data);
    }

    set(key,value){

        const address = this.hashMethod(key);
        if(!this.data[address]){ //si todavia no hay nada en esa key, creo el array vacio
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        return(this.data);
    }

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i=0;i< currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    return (currentBucket[i][1]);
                }
            }
        }
        
        return(undefined);
    }

    getAllKeys(){
        const keys = [];
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
                for(let j=0; j< this.data[i].length;j++){
                    keys.push(this.data[i][j][0]);
                }
            }            
        }
        return(keys);
    }

    delete(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i=0; i< currentBucket.length; i++){
                if(currentBucket[i][0]===key){
                    var item = currentBucket[i];
                    this.data[address].splice(i,1);

                    return (item);
                }
            }
        }
        return(item);
    }
   
}

const myHashTable = new HashTable(50);

console.log(myHashTable.set("Juan",32));
console.log(myHashTable.set("Flor",34));
console.log(myHashTable.set("Maria",60));

console.log(`keys:  ${myHashTable.getAllKeys()}`);

console.log(myHashTable.get("Juan"));

console.log(myHashTable.delete("Juan"));

myHashTable.show();