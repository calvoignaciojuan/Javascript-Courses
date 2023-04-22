const express = require("express");
const routerApi = require("./routes/index");
const {logErrors,boomErrorHandler,errorHandler} = require("./middlewares/error.handler");


const app = express();
const port = 3000;

app.use(express.json()); //para que me puedan llegar objetos json por POST, sino no req.body no devuelve nada

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`server listening in http://localhost:${port}`);
});
