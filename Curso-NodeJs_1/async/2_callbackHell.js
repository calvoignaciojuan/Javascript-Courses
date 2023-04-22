function hola(name, callback){
    setTimeout( function(){
        console.log("Hola "+ name);
        callback(name);
    },2000);

}

function hablar(callback){
    setTimeout(function(){
        console.log("bla bla bla");
        callback();
    },2000);
}

function adios(name,callback){
    setTimeout(() => {
        console.log("adios " + name);
        callback();
    }, 2000);
}

//CALLBACKHELL
hola("Juan",function(name){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(name,function(){
                    console.log("terminando preceso...");
                });
            });
        });
    }); 
});