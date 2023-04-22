const express = require("express");
const router  = express.Router();
const response = require("../../network/response");

const controller = require("./controller");


router.post("/", async function(req,res){

    try{
        let users = req.body.users ;
        const newChat = await controller.addChat(users);
        response.success(req,res,newChat,202); 

    }catch(error){
        response.error(req,res,"Unexpected error",401,error.message); 
    }
   
});

//get chats
router.get("/", async function(req,res){
  

    try{
        const data = await controller.getChats();
        response.success(req,res,data ,202); 
    }catch(error){
        response.error(req,res,"internal error",401,error.message);
    }   
});

//get chat by _idUser
router.get("/:idUser", async function(req,res){
  

    try{
        const data = await controller.getChats(req.params.idUser);
        response.success(req,res,data ,202); 
    }catch(error){
        response.error(req,res,"internal error",401,error.message);
    }   
});



module.exports = router;