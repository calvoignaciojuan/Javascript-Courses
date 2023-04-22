console.log(global);


//ejecutar algo un numero de veces
let i=0;
let interval = setInterval(function(){
  
    i++;
    if (i===3){
        clearInterval(interval);
    }
    console.log("Hola");
},1000);


//ejecuta de forma asincrona en cuanto pueda
setImmediate(function(){
    console.log("IMMEDIATE");
}); 

//mostrar informacion del proceso
console.log(process);

//acceder a directorio donde esta archivo ejecutandose
console.log(__dirname);

//acceder a ruta completa de archivo que se esta ejecutando
console.log(__filename);

//crear variables globales
global.miVariable = "Juan Calvo";
console.log(miVariable);