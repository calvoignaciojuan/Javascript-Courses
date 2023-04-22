
console.time("tiempo programa completo");

let suma = 0;
let suma2 = 0;
let suma3 = 0;

console.time('Tiempo bucle1');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle1');


console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + 1;
}
console.timeEnd('Tiempo bucle 2');


console.time('Tiempo bucle 3');
for (let k = 0; k < 1000; k++) {
    suma3 +=  1;
}
console.timeEnd('Tiempo bucle 3');

console.timeEnd("tiempo programa completo");


//----- MEDIR TIEMPO EN EL ASINCRONISMO



function asincrona() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Termina el proceso asíncrono')
            resolve()
        }, 0)
    })
}

console.time('bucle async')
console.log('Empieza el proceso asincrono')

asincrona()
    .then(() => console.timeEnd('bucle async'))
