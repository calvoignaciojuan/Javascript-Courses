//enhanced object literals

function newUser(user,age,country{
    return ({
        user: user,
        age: age,
        country:country
    }) ;
}


//nueva forma

function newUser(user,age,country,uId){
    return ({
        user, 
        age,
        country,
        id: uId
    }) ;
}

console.log(newUser("juan",32,"ARG",1));