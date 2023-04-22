let buffer = Buffer.from([1,2,10]);

console.log(buffer);

// --

let abc = Buffer.alloc(26);

for(let i=0; i<26;i++){
    abc[i]=i+97;  //97= a la letra a
}

console.log(abc);
console.log(abc.toString());