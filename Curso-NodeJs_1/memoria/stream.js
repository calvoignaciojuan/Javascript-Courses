//sirven para manejar grandes volumenes de datos, de forma asincronica para no bloquear el mainProgram

const fs = require("fs");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8"); //si ya se que es un string, puedo decirselo asi me evito usar el .toString()

readableStream.on("data",(chunk)=>{
    data += chunk;
});

readableStream.on("end",()=>{
    console.log(data);
});


//----------------------------------------------------------
//---------------- buffer de transformacion

const { Transform } = require("stream");
const { createReadStream } = require("fs");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream2 = createReadStream(__dirname + "/input.txt");

readableStream2.pipe(upperCaseTransform).pipe(process.stdout);