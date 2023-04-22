const express = require("express");
const app = express();

const server = require("http").Server(app);
const io= require("socket.io")(server);

app.use(express.static("public"));

io.on("connection", function(socket){
    console.log("nuevo cliente conectado");
    socket.emit("mensaje","bienvenido");
});

setInterval(function(){
    //les escribo a todos los conectados
   io.emit("mensaje","Hola les escribo a todos a la vez");

},3000);


server.listen(8080, function(){
    console.log("servidor iniciado en http://localhost:8080");
});
