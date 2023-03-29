

//para evitar errores por si no existe la propiedad u objeto

const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users?.bebeloper?.country);   //devuelve undefined