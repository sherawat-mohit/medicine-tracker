require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");


// Setting up PORT
const PORT = process.env.PORT || 3000;

// initializing express app
const app = express();


// Middleware
app.use((req,res,next) => {
    console.log("Hello from Middleware");
    next();
});


// Routes
app.use("/", routes);


// Listening to server
const start = () => {
    try{
        app.listen(PORT, ()=>{
            console.log(`Server is up and running on PORT : ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();