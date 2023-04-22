const express = require("express");
const multer  = require("multer");

const response = require("../../network/response");
const controller = require("./controller");
const router  = express.Router();

const upload = multer({
    dest: "public/files/"
});

router.get("/", async function(req,res){
    
    try{
        const filterUser = req.query.chat|| null;

        const messages = await controller.getMessages(filterUser);
        response.success(req,res,messages);

    }catch(error){
        response.error(req,res,"Unexpected Error",401,error.message);

    }
}); 

router.post("/", upload.single("file") , async function(req,res){

    try{
        let newMassege = await controller.addMessage(req.body.chat,req.body.user,req.body.message,req.file);
        response.success(req,res,newMassege,202);
    }catch(erorInterno){
        response.error(req,res,"Unexpected Error",401,erorInterno.message);
    }   
});

router.patch("/:id", (req,res)=>{

    controller.updateMessage(req.params.id,req.body.message)
        .then((data)=>{
            response.success(req,res,data);
        })
        .catch((e)=>{
            response.error(req,res,"error",null,e);
        })

})

router.delete("/:id", (req,res)=>{

    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req,res,`Mensaje ${req.params.id} ha sido eliminado`);
        })
        .catch((e)=>{
            response.error(req,res,"error",null,e);
        })

})



module.exports = router;
