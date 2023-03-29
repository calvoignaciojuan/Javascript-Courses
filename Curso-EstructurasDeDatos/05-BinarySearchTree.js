class node{
    constructor(value){
        this.left =null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{

    constructor(){
        this.root=null;
    }

    #inserNode(node,pointer){
        if(pointer.value > node.value ){ //if its lower, have to go to the left
            if(!pointer.left){          //if left is null
                pointer.left = node;
            }else{                      //if left isn't null
                this.#inserNode(node,pointer.left);
            }
        }else{
            if(!pointer.right){          //if right is null
                pointer.right = node;
            }else{                      //if left isn't null
                this.#inserNode(node,pointer.right);
            }
        }
    }

    insert(value){
        const newNode = new node(value);

        if(!this.root){ //is an empy tree?
            this.root = newNode;
            return this;
        }
        this.#inserNode(newNode,this.root);
        
        return this;
    }

    search(value,tree = this.root){
        if(!tree){
            return(`no se encontro el valor ${value}`);
        }
        if(tree.value=== value){
            return("elemento encontrado");
        }
        if(tree.value > value){
            return this.search(value,tree.left);
        }
        return this.search(value,tree.right);
    }

}

const arbol = new BinarySearchTree();

arbol.insert(10);
arbol.insert(5);
arbol.insert(14);
arbol.insert(20);
arbol.insert(15);
arbol.insert(7);
arbol.insert(20);
arbol.insert(3);


arbol.search(8);
arbol.search(15);
