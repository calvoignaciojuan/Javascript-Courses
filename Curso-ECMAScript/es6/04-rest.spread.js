//arrays destructuring
let fruits = ["apple", "banana"];
let [a,b] = fruits;         //hace copia de valor, no ref
console.log(a,b);
fruits[0] = "pepe";
console.log(a);   

//object destructuring
let user = { username: "Oscar", age:34};
let { username, age } = user;
console.log(username,age);


//spread
let person = {name:"oscar",age:28};
let country = "MX";

let data = {...person,country};
console.log(data);

data = {id:1, ...data};
console.log(data);


//rest
function sum(num, ...values){

    console.log(values);
    console.log(num + values[0]);
    return (num + values[0]);
}

sum(0,1,2,3);