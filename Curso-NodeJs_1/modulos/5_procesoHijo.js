
const { exec , spawn } = require("child_process"); //equivalente a poner: const exec = require.apply("child_process").exec;

// //para simplemente ejecutar un comando en consola
// exec("ls -la",(err,stdout,sterr) =>{  //puede ser ejecutar el script: "node /modulos/3_console.js"
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log(stdout);
// });



//----------------------------
//para ejecutar un comando y tener mucho mas control sobre el proceso
let proceso = spawn("ls",["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data",function(dato){
    console.log(dato.toString());
})

proceso.on("exit",function(){
    console.log("el proceso termino");
    console.log(proceso.killed)
});