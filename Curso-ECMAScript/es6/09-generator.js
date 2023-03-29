
function* iterator(array){

    for(let elemento of array){
        yield elemento;
    }

}

const it = iterator(["juan","pedro","Camila","jose"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);