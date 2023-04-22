const express = require("express");
const router  = express.Router();
const response = require("../../network/response");

const controller = require("./controller");


router.post("/", async function(req,res){

    try{
        
        const newUser = await controller.addUser(req.body.name,req.body.lastName)
        response.success(req,res,newUser,202); //"usuario creado"

    }catch(error){
        response.error(req,res,"Unexpected error",401,error.message); 
    } 
   
});

router.get("/", function(req,res){
  
    controller.getUsers()
        .then((data)=>{
            response.success(req,res,data ,202); //"usuario creado"
        })
        .catch((e)=>{
            response.error(req,res,"internal error",401,e); 
        });
   
});

router.delete("/:user", async function(req,res){
    
    try{
        await controller.deleteUser(req.params.user);
        response.success(req,res,"usuario eliminado" ,202);
    }catch(error){
        response.error(req,res,"Unexpected Error",401,error.message); 
    }

    // controller.deleteUser()
    //     .then((data)=>{
    //         response.success(req,res,data ,202); //"usuario creado"
    //     })
    //     .catch((e)=>{
    //         response.error(req,res,"internal error",401,e); 
    //     });
   
});

module.exports = router;