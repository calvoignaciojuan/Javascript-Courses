function success(req,res,message,status){

    res.status(status || 200).send({
        "error":"",
        "body": message
    });
}

function error(req,res,message,status,internalErrorMessage){
    console.error("[response error] " + internalErrorMessage)
    res.status(status || 500).send({
        "error":message,
        "body": ""
    });
}


exports.success = success;
exports.error = error;