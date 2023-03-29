const asyncFunction = () =>{
    return ( new Promise((resolve,reject) => {
        (true)
            ? setTimeout(()=>resolve("resolve"),2000)
            : reject(new error("reject!"));
    }));
};

const anotherFunction = async () =>{

    console.log("antes promesa")
    await asyncFunction();             //es bloqueante solo dentro de esta funcion
    console.log("despues promesa");

};

console.log("before");
anotherFunction();                     //es NO bloqueante
console.log("after");