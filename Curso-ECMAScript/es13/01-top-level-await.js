import fetch from "node-fetch";


//deja usar await sin async pero es bloqueante
const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export {products};