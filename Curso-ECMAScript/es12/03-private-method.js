
//-----------------------     1    -----------------------

//declarando
class User {};

//instancia de una clase
const newUser = new User();

//-----------------------     2    -----------------------
class user{

    //metodos
    greeting(){
        return ("Hello");
    }
};

const juan = new user();
console.log(juan.greeting());

const carlos = new user();
console.log(carlos.greeting());


//-----------------------     3   -----------------------


class user{

    //constructor
    constructor(){
       console.log("hola");
    }

    //metodos
    greeting(){
        return ("Hello");
    }
};

const david = new user();

//---------------------------  4 ---------------------------

//this

class user{

    //constructor
    constructor(name){
       this.name =name;
    }

    //metodos
    speak(){
        return "hello";
    }
    greeting(){
        return (`${this.speak()} ${this.name}`);
    }
};

const user = new user("juan");
console.log(juan.greeting());

//-------------------------   5    ------------------------------------

//setters and getters

class user{

    //constructor
    constructor(name,age){
       this.name = name;
       this.age = age;
    }

    //metodos
    #speak(){
        return "Hello";
    }
    greeting(){
        return (`${this.#speak()} ${this.name}`);
    }

    get uAge(){
        return(this.age);
    }
    set uAge(n){
        this.age = n;
    }

};


const persona = new user("Juan",34);

console.log(persona.greeting());    //dentro de greeting puedo usar privadas

console.log(persona.#speak());   //obviamente no anda