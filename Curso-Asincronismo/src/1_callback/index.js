
function sum(num1,num2){
    return(num1 + num2);
}

function sumar(callback,num1,num2){

    return(callback(num1,num2));
}

console.log(`la suma es igual a: ${sumar(sum,1,2)} `);