// Con console podemos imprimir todo tipo de valores por
// nuestra terminal.

/* 
console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola. */

var tabla = [
    {
        a:1,
        b:"hola"
    },
    {
        a:2,
        b:"chau"
    }
];

console.table(tabla);

function funcion1(){
    console.group("Funcion1")
    console.log("linea1");
    console.log("linea2");
    console.log("linea3");
    funcion2();
    console.log("linea4");
    console.groupEnd("Funcion1")
}

function funcion2(){

    console.group("Funcion2")
    console.log("linea1");
    console.log("linea2");
    console.log("linea3");
    console.groupEnd("Funcion2")
}

console.group("Hilo principal");
funcion1();
console.groupEnd("Hilo principal");
console.log("chau");


console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
console.count("veces");
