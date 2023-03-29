const promise = new Promise(function(resolve,reject){
    resolve("heay!)");
});


const cows = 9;

const countCows = new Promise(function(resolve,reject){

    if(cows > 10){
        resolve("tengo suficiente vacas!");
    }else{
        reject("no tengo vaquitas :(");
    }

});


countCows.then((result)=>{
    console.log(result);     
}).catch((result)=>{
    console.log(result);
}).finally(()=>{
    console.log("finally");
})


