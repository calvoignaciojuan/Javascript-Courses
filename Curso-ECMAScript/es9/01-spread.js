const user = {username: "gndx",age:32,country:"ARG"};

const {username, ...values} = user;

console.log(username);
console.log(values);