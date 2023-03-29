


function mifuncion(){    
    var caja4 = "mmmm";
    if(true){
        var caja1= "dato1";       //function scope   (hoisting me lo saca del if en tiempo de ejecucion)
        let caja2= "dato2";      //block scope
        const caja3 = "dato3";   //block scope
    }

}

console.log(caja4);