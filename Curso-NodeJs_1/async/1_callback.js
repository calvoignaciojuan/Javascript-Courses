
function hola(nombre,miCallback){
    setTimeout( function(){
        console.log("HOLA " + nombre);
        miCallback(nombre);
    },2000);
}

function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log("adios " + nombre);
    },2000);
    otroCallback();    
} 
 
hola("juan",function(nombre){
    adios(nombre,function(){ 
        console.log("terminando proceso...");
    });
}); 
 
//cuando una funcion asincronica necesita valores de otra asincronica, necesitamos anidarlas 
//puedo ir pasando parametros a traves de todos los callbacks anidados.

// Primero se ejecuta HOLA, despues OTROCALLBACK y por ultimo ADIOS. pero OTROCALLBACK siempre se ejecuta despues de HOLA.
// asincronica pero secuenciales

