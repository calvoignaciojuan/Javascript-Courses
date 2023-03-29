

function fabricaDeAlcancia(){
    let totalGuardado = 0;

    return ( function(plataGuardar=0){

        totalGuardado += plataGuardar;
        console.log(totalGuardado);
    });
}

var alcancia = fabricaDeAlcancia();
alcancia();
alcancia(5);
alcancia(5);
alcancia();
