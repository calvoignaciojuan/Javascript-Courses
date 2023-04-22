async function hola(name){
    return new Promise((resolve,reject)=>{
        setTimeout( function(){
            console.log("Hola "+ name);
            resolve(name);
        },2000);
    });
}

async function hablar(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla");
            resolve(name);
        },2000);
    });
    
}

async function adios(name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("adios " + name);
            resolve(name);
        }, 2000);
    });
    
}

async function main(){

    let nombre = await hola("Juan");
    await hablar();                     //cada await lo que hace es esperar a que la funcion asincrona termine de ejecutarse
    await hablar();                     //con esto logramos tratar a una funcion asincrona como si fuese sincrona, pero sin bloquear 
    await hablar();                     //la ejecucion del hilo principal y de una manera mucho mas comoda para el programador
    await adios(nombre);
    console.log("estoy en una funcion asincronica");

}

//------------------------------------------------  en terminal: nodemon asyncAwait.js

console.log("primera instruccion");
main();
console.log("segunda instruccion");