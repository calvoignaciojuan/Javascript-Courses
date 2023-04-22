import bcrypt from "./node_modules/bcrypt/bcrypt.js";
//const bcrypt = require("./node_modules/bcrypt/bcrypt.js");

const contraseña = "juan1234!";

//obtener hash a partir de password
bcrypt.hash(contraseña,5,(err,hash)=>{
    console.log(hash);

    //comparar si hash fue creado a partir de cierto password
    bcrypt.compare("juan1234!",hash,(err,res)=>{
        console.log(res);
    })
})
