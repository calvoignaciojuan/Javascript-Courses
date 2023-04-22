const os = require("os");

console.log(os.arch());
console.log(os.platform());

console.log(os.cpus());
console.log(os.cpus().length);

//console.log(os.constants);

const SIZE = 1024;
function kb(bytes){ return bytes/SIZE;}
function Mb(bytes){ return kb(bytes)/SIZE;}
function Gb(bytes){ return Mb(bytes)/SIZE;}


console.log("Memoria total sistema: "+ Gb(os.totalmem()));
console.log("Memoria disponible sistema: " + Gb(os.freemem()));

console.log("directorio raiz: " + os.homedir());
console.log("directorio temporal: " + os.tmpdir());

console.log("nombre equipo: " + os.hostname());

console.log("interfaces de red: " );
console.log( os.networkInterfaces());