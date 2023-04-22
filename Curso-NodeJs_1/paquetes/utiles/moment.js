import moment from "./node_modules/moment/moment.js";

const ahora = moment();

console.log(ahora.toString());

console.log(ahora.format("DD/MM/YYYY - HH:mm"));