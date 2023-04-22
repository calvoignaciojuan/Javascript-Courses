/* cuando algo a ejecutar puede generar un error hay que ponerlo dentro de un bloque try 
para evitar que si hay error este corte la ejecucion del programa
dentro del catch tratamos el error
 */

function otrafuncion(){
    seRompe();
}

function seRompe(){
    return 3+z;
}

//-----------------------------------------------------
//para lograr lo mismo pero en funciones asincronicas hay que agregar el try/catch dentro del Callback
function serompeAsincrona(cb){
    setTimeout(()=>{
        try{                        //en asincronas hay que tratar los errores dentro de ellas
            return 4+z;
        }catch(err){
            console.error("error en funcion asincrona");
            cb(err);
        }
        
    },2000);
}


try {
    //otrafuncion();        //el error puede esta en niveles interiores, se evita de igualmanera por que se va devolviendo a los niveles superiores
    serompeAsincrona((err)=>{
        console.error(err.message);
    });     

}catch(err){
    console.error("ocurrio un error");
    console.error(err.message);
}

console.log("termino proceso");



