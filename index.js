require("dotenv").config();
const path = require('path'); 
const express = require("express");
const routes = require("./routes/routes");


// Setting up PORT
const PORT = process.env.PORT || 3000;

// initializing express app
const app = express();

// setting view engine
app.set("view engine", "ejs");
app.use(express.static('assets'));
app.set('views', path.join(__dirname, 'views')); 


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