const model = require("./model");


async function existDB(id) {
    try{
        const exist = await model.exists({
            _id:id
        });       
        return exist;
    }catch(e){
        //console.log("[store] no existe id")
        return false;
    }
}

async function addMessage(message){
    try{
        const myMessage = new model(message);
        return await myMessage.save();
    }catch(error){
        console.log("[Store message] " + error.message);
        throw new Error("Error saving")
    }
    
}

async function getMessages(filterUser){

    try{

        let filter = {};
        if(filterUser !== null){
            filter = { 
                 chat: filterUser
            };
        }
    
        return await model.find(filter).populate("user",{"name":true, "lastName":true}).exec();

    }catch(error){
        console.log("[store] " + error.message);
        throw new Error();
    }
}

async function updateMessage(id,message){

    if(await existDB(id)){
        const foundedMessage = await model.findById(id);
        foundedMessage.message = message;
        const result = await foundedMessage.save();
        return result;       
    }
    console.log("[store message] no existe id")
    return false;    
}

async function deleteMessage(id){
    
    if(await existDB(id)){
        return await model.deleteOne({
                                        _id:id
                                    });
    }else{
        return new Promise((resolve,reject)=>{
            reject("id not found")
        });
    }                    
}

module.exports = {
    "add": addMessage,
    "list": getMessages,
    "updateMessage":updateMessage,
    deleteMessage:deleteMessage
}