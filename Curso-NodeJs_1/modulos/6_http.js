const http = require("http");

function router(req,resp){

    console.log("nuevo request!");
    console.log(req.url);

    switch (req.url){
        case "/hola":   
            //Escribir respuesta al usuario
            resp.write("Hola como estas?");
            resp.end();
            break;
        default:
            resp.write("Eror, no se lo que queres");
            resp.end();      
    }

   
}

http.createServer(router).listen(3000);

console.log("servidor escuchando en puerto 3000");