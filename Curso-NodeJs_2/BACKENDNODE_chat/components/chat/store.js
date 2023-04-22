const model = require("./model");
  

async function addChat(users){

    try{
        const newChat = new model(users);
        return await newChat.save();

    }catch(error){
        console.log("[store] " + error.message);
        throw new Error("error en guardado");
    }
}

async function getChats(filter){   
    try{
        const chats = await model.find(filter).populate("users").exec();
        return chats;
    }catch(error){
        console.log("[store] " + error.message);
        throw new Error("error en guardado");
    }    
}


module.exports = {
    add: addChat,
    list: getChats,

}