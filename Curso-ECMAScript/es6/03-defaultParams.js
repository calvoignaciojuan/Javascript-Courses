
//forma antigua de poner valores por defecto en funciones
function newUser(name, age, country){
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "MX";

    console.log(name, age,country);
}
newUser();
newUser("Juan",15, "ARG");


//nueva manera de poner valores por defecto
function newAdmin(name ="Oscar", age =32, country ="ARG"){
    console.log(name,age,country);
}

newAdmin();
newAdmin("marce",35,"CHILE");