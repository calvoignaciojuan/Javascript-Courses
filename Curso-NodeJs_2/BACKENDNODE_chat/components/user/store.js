const store = require("../message/store");
const model = require("./model");

async function existDb(id){
    try{
        const result = await model.exists({
            _id:id
        });
        return result;
    }catch(error){
        console.log("[store] " + error.message);
        throw new Error("no existe id usuario");
    }    
}

async function addUser(user){

    try{
        //console.log(user );
        const newUser = new model(user);
        return await newUser.save();

    }catch(error){
        console.log("[store] " + error.message);
        throw new Error("error en guardado");
    }
}

function getUsers(){   
    return model.find();
}

async function deleteUser(id){
    await model.deleteOne({
        _id:id
    });
}

module.exports = {
    add: addUser,
    list: getUsers,
    existDb,
    delete:deleteUser
}