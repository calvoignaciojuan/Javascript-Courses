// const process = require("process");

process.on("beforeExit",()=>{
    console.log("antes de que termine el proceso");
});

process.on("exit",()=>{
    console.log("termino el proceso");
    //ACA YA NO FUNCIONA EL EVENT LOOP. no se puede usar por ejemplo setTimeOut() simplemente no funciona
});


//para capturar un error que se nos paso fuera de catch(el programa no sigue despues de esta funcion)
process.on("uncaughtException",(error,origen)=>{
    console.log("ocurrio un error fuera de catch");
    console.log(error.message);
});

//para atrapar una promesa rechazada que nos quedo fuera del catch
// process.on("unhandledRejection",()=>{
//     bla
// })

funcionquefalla();

console.log("hola"); 