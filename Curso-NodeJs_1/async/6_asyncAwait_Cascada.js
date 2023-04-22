function getDato(){
    return new Promise((resolve,reject)=>{
        
        // setTimeout(() => {
        //     resolve("Juan");
        //     console.log("en cb de promesa y dentro del setTimeout");
        // }, 3000);
        resolve("Juan");
        console.log("en cb de promesa pero fuera del setTimeout");
    });
}

async function nivel2(){
    let dato2 = await getDato();
    console.log("estoy en nivel 2");
    return dato2;
}

async function nivel1(){
    let dato1 = await nivel2();
    console.log("estoy en nivel 1")
    return dato1;
}

async function main(){
    console.log(await nivel1());
    console.log("En Main");
}

console.log("Antes de llamar a main");
main();
console.log("Despues de llamar a main");


