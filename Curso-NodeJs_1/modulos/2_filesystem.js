//siempre que usemos el filesystem lo vamos a hacer con funciones asincronas 
//por mas que existen las sincronas, no podemos bloquear la ejecucion del programa principal

const fs = require('fs');

function leer(ruta,cb){
    fs.readFile(ruta, (err,data) => {
    err? 
        console.error() :    
        cb(data.toString());

    });
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido, (err)=>{
        err?
            console.error(err) :
            console.log("se escribio el archivo correctamente");
    }
    );
}

function borrar(ruta,cb){
    fs.unlink(ruta,cb);
}
   
 
leer(__dirname + "/archivo.txt",console.log);

escribir(__dirname + "/archivoEscrito.txt", " hola que tal ", console.log); 


setTimeout(()=>{
    borrar(__dirname + "/archivoEscrito.txt",console.log)}  
    ,4000);
