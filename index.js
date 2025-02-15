const express = require("express");
const app = express(); 
const handleErrors = require("./middlewares/error")


//Middlewares
app.use(cors()); // Allows cross domain
app.use(morgan("dev")); // Show log terminal
app.use(express.json()); // For read json

//Routing 






//Handle error 
app.use(handleErrors)

//Start server 
const PORT = 9898; 
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));