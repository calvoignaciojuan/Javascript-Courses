const store = require("./store");
const {socket} = require("../../socket");

async function addMessage(chat,user,message,file){

    try{
        if(!user || !message){
            console.log("[messageControler] falta usuario o mensaje");
            throw new Error();
        }else{
            
            let fileUrl = "";
            if(file){
                fileUrl= "http://localhost:3000/app/files/" + file.filename;
            }
            const fullMessage = {
                chat,
                user,
                message,
                "date": new Date(),
                file: fileUrl
            };
            
            const result = await store.add(fullMessage); //me devuelvo el mensaje

            socket.io.emit("message", fullMessage);

            return result;
        }
    }catch(error){
        throw new Error("Datos incorrectos");
    }     
}

async function getMessages(filterUser){
    
    try{
        return store.list(filterUser);
    }catch(error){
        throw new Error("Error al obtener los datos");
    }   
}

function updateMessage(id,message){

    return new Promise(async (resolve,reject)=>{
        if(!id || !message){
            console.log("[messageControler] falta id o mensaje")
            reject("Error data");
            return false;
        }      

        const result = await store.updateMessage(id,message);
        if(result){
            resolve("mensaje actualizado");   
        }else{
            reject("Error data");
        }
             
    });
}

function deleteMessage(id){

    return new Promise((resolve,reject)=>{
        if(!id){
            console.log("[messageControler] falta id o mensaje")
            reject("Error data");
            return false;
        }

        store.deleteMessage(id)
            .then(()=>{
                resolve();
            })
            .catch((e)=>{
                reject(e);
            });

    });
}

module.exports = {
                    addMessage,
                    getMessages,
                    updateMessage,
                    deleteMessage
};