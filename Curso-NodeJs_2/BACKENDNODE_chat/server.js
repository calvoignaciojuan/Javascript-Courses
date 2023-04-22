const express = require("express");
const app = express();
const server = require("http").Server(app);

const socket = require("./socket");

const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./network/routes");

db.connect("mongodb+srv://calvoignaciojuan:Rk8tuKfdOFXa7HSF@cluster0.xoz5kam.mongodb.net/falsoTelegram"); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use("/app",express.static("public"));

socket.connect(server);

server.listen(3000,function(){
    console.log("La aplicacion esta escuchando en http://localhost:3000");
});


