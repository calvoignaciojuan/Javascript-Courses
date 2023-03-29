var piedra = "piedra", papel = "papel", tijera = "tijera";

function jugar(maquina,jugador){

    if((maquina === "piedra") && (jugador === "piedra")){
        console.log("empate");
    }else if((maquina === "piedra") && (jugador === "papel")){
        console.log("ganaste");
    }else if((maquina === "piedra") && (jugador === "tijera")){
        console.log("perdiste");
    }else if((maquina === "papel") && (jugador === "piedra")){
        console.log("perdiste");
    }else if((maquina === "papel") && (jugador === "papel")){
        console.log("empate");
    }else if((maquina === "papel") && (jugador === "tijera")){
        console.log("ganaste");
    }else if((maquina === "tijera") && (jugador === "piedra")){
        console.log("ganaste");
    }else if((maquina === "tijera") && (jugador === "papel")){
        console.log("perdiste");
    }else if((maquina === "tijera") && (jugador === "tijera"))
    console.log("empate");


}

jugar(piedra,papel);