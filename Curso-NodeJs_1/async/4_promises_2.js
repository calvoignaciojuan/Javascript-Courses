function hola(name){
    return new Promise((resolve,reject)=>{
        setTimeout( function(){
            console.log("Hola "+ name);
            resolve(name);
        },2000);
    });
}

function hablar(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla");
            resolve(name);
        },2000);
    });
    
}

function adios(name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("adios " + name);
            resolve(name);
        }, 2000);
    });
    
}

//el uso de las promesas simplifican el anidado de funciones asincronica y el manejo de errores en cualquiera de ellas.
//si hay error un una, se corta la ejecucion de las siguientes

console.log("empeza el proceso");

hola("Juan")
    .then((name)=>{
        adios(name);
    }) 
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then() 
    .catch(error => {
        console.error(error);
    });

console.log("termina el proceso");

//LA CADENA DE PROMESAS NO BLOQUEA LA EJECUCION DEL CODIGO PRINCIPAL