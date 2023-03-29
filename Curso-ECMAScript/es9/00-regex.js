const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-09-01");

console.table(matchers);

console.log(matchers);