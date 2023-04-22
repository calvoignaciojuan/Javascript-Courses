const store = require("./store");

async function addUser(name,lastName){
    
    try{
        if(!name || !lastName){
            throw new Error();
        }
        
        const user = {
            name,
            lastName,
        }
    
        return await store.add(user);

    }catch(error){
        console.log("[controller] "+ "Input Data Error")
        throw new Error("error en datos");
    }
}

function getUsers(){
   
    return store.list();
}

async function deleteUser(id){

    try{
        if(!id){
            throw new Error("id inexistente");
        }
        if(!await store.existDb(id)){
            throw new Error("id inexistente");
        }
        await store.delete(id);

    }catch(error){
        console.log("[controller] "+ error.message)
        throw new Error(error);
    }
}

module.exports = {
    addUser,
    getUsers,
    deleteUser
}