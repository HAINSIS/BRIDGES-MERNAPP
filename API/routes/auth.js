//0tFoZ2LGM9b2fGPX
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { response } = require("express");


// REGISTER

router.post("/register", async(req,res)=>{

    try{
        //generate an encrypted password
        salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // creat new user
        const newUser = await new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        });

        //save the user and respend
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
        
    }
});

// LOGIN
router.post("/login", async(req,res)=>{
    try{
        // checking email
        const user = await User.findOne({email : req.body.email})
        !user && res.status(404).json("user not found!!!")
        
        //checking password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("wrong password!!!")

        //if email and pw are correct
        res.status(200).json(user)

    } 
    catch(err){
        res.status(500).json(err)
    }

})

module.exports = router