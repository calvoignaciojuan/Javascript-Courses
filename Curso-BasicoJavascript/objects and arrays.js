//definir directamente un objeto
var auto = {
    marca: "Ford",
    modelo: "Fiesta",
    "año": 1987,
    mostrarColor: function() {

        console.log(`marca: ${this.marca} modelo: ${this.modelo}`);
    }
};

//----------------------------------------------------------------------------------------------

//crear una funcion constructora de objetos
function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var coleccionAutos = [];

for( var i=0; i<3; i++){
    coleccionAutos.push(new auto(prompt("ingrese marca: "),prompt("ingrese el modelo: "), prompt("ingrese el año: ")));
}


//----------------------METODOS PARA RECORRER ARRAYS(NO MODIFICAN EL ARRAY ORIGINAL)---------------------------------------------------------

//FILTER
var compras = [{marca: "celular", precio:7000},
              {marca: "tv", precio:20000},
              {marca: "colchon",precio:18000}];

var comprasCaras = compras.filter( function(compra){

    return(compra.precio >= 10000);
});


//MAP
var compras = [{marca: "celular", precio:7000},
              {marca: "tv", precio:20000},
              {marca: "colchon",precio:18000}];

var marcasCompradas = compras.map( function(compra){

    return(compra.marca);
});
console.log(marcasCompradas.join(''));


//FIND
var compras = [{marca: "celular", precio:7000},
              {marca: "tv", precio:20000},
              {marca: "colchon",precio:18000},
              {marca: "arcor",precio:180}];

var compraQueCumple = compras.find(function(compra){

    return (compra.marca === "arcor");

});

//forEach
var compras = [{marca: "celular", precio:7000},
              {marca: "tv", precio:20000},
              {marca: "colchon",precio:18000},
              {marca: "arcor",precio:180}];

compras.forEach(function(compra){

    console.log(compra.precio);

});

//some
var compras = [{marca: "celular", precio:7000},
              {marca: "tv", precio:20000},
              {marca: "colchon",precio:18000},
              {marca: "arcor",precio:180}];

var existePrecio = compras.some(function(compra){

    return(compra.precio == 7000);

});
console.log(existePrecio);





