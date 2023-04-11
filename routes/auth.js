const express = require("express");
const router = express.Router();
const mongoose= require("mongoose");
const USER = mongoose.model("USER")
const bcrypt = require('bcrypt');

router.get('/', (req , res) => {
    res.send("Sent")
})

// signup API
router.post('/signup' , (req , res) => {
    const{username, email, password}= req.body;
    // Error message for incomplete fields
    if(!username || !email || !password){
        res.status(422).json({error: "Add all data"})
    }

USER.findOne({$or: [{email:email}, {username:username}]}).then((savedUser) => {

    if(savedUser){
        return res.status(422).json({error: "Username or email already exists"})
    }
    bcrypt.hash(password,12).then((hashedPassword) => {
        const user = new USER({
            username,
            email,
            password:hashedPassword
        })
    
        user.save()
        .then(user => {res.json({message: "Saved Successfully"})})
        .catch(err => {console.log(err)})    
    })

})

//res.json("Data posted")
})

module.exports = router;