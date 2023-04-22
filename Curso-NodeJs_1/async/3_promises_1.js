
const numeroIngresado = process.env.NUMERO;

const promesa = new Promise((resolve,reject)=>{

    console.log("principio promesa");
   
    setTimeout(()=>{
        if (numeroIngresado >5){
            resolve("PROMESA ->> funciono bien, es mayor que 5");
        }else{
            reject("PROMESA ->>  fallo, es menor que 6");
        }
    },2000);

    console.log("final promesa");
   
});

console.log("empeza el proceso");

promesa
    .then((respuesta)=>{
            console.log(respuesta);
        })
    .then(new Promise((resolve,reject)=>{    //dentro del then tiene que haber otra promesa para poder ir encadenando then's
        resolve();
    }))

    .catch(error => {
        console.error(error);
    });

console.log("termina el proceso");

//ejecutar en terminal
// NUMERO=1 node async/promises_1.js