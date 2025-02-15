const express = require("express"); 
const authRouter = express.Router(); 
const authControllers = require("../controllers/auth-controller") 


//@endpoint 
authRouter.post("/register", authControllers.register) 

//export 
module.exports = authRouter;