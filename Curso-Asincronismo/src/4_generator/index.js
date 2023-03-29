
/* 
un generador (function*) permite ejecutar de a pasos una funcion, pausar su ejecucion y reanudarla
cada vez que llamo a funcion yield, el codigo de la funcion avanza un ciclo hasta que lee de nuevo yield */

//------------------------------- EJEMPLO 1 -----------------------
function* gen(){

    yield 1;
    yield 2;
    yield 3;   
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//--------------------------------   EJEMPLO 2 --------------------

function* gen(){

    for(let i=0;i<3;i++){
        yield i;
    }
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);