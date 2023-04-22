
function asincrona(callback){

    setTimeout(()=>{
        try{
            let cuenta = 3 + z;
            callback(err,cuenta);
        }catch(err){
            callback(err);
        }        
    },2000);  
}

//el promer parametro de un callback tiene que ser el error
asincrona((err,dato)=>{

    //lo primero que hay que hacer es chequear si hubo error
    if(err){
        //throw err;  NO VA A FUNCIONAR SI PONGO EL TRY-CATCH EN BLOQUE FLOBAL, POR QUE OCURRE DENTRO DE UNA FUNCION ASINCRONA
        console.error("hemos tenido un error!");
        console.error(err);
        console.error("tratamos el error");
        return false;
    }

    console.log("no hubo error, seguimos");

});