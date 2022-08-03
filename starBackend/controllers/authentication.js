const User=require('../models/profiledetails');



const register=async (req,res)=>{
    res.send('registered')
    console.log(req.body)
}

const login=async (req,res)=>{
   res.send('logged in')
}



module.exports={
    register,
    login
}