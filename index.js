//importing pkgs
const express = require('express');
const app = express();
require("dotenv").config();
const mongoose = require('mongoose')
const port = process.env.PORT //.on fetching the env file port


const MONGOURL = process.env.MONGOURL

cdcfd
asasda
//importing user schema
require("./Models/users")


// Checking the API data
app.use(express.json());

//express middleware
app.use(require("./routes/auth"))



//app.get('/' ,(req,res) => {res.send("Connected")})
mongoose.connect(MONGOURL)
mongoose.connection.on ("connected", () => {console.log('Connected to MONGO DB')})
mongoose.connection.on ("error", () => {console.log('Error in MONGO DB')})



app.listen(port, ()=>{
    console.log("Server is running on port" + port)
}
)




