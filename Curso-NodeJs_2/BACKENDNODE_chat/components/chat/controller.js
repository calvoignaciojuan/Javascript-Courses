const store = require("./store");

async function addChat(users){
    
    try{

        if(!users || users.length < 2){
            throw new Error();
        }

        let newChat = {
            "users":users
        }
        return await store.add(newChat);

    }catch(error){
        console.log("[controller] "+ "Input Data Error")
        throw new Error("error en datos");
    }
}

async function getChats(idUser){
   
    try{
        let filter ={
            users: idUser
        };
        if(!idUser){
            filter={};
            //throw new Error("no user id");
        }
       
        return await store.list(filter);
    }catch(error){
        throw new Error(error);
    }
    
}

module.exports = {
    addChat,
    getChats
}