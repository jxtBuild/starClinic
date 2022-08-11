const Profile=require('../model/profiledetails');
const jwt=require('jsonwebtoken');


const register=async (req,res)=>{
   
}

const login=async (req,res)=>{
    const {username,password}=req.body
    const id=new Date().getDate();
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'2d'})
    res.status(200).json({msg:"user created",token})
}

const dashboard=async(req,res)=>{
    const data=req.user
    console.log(data.username)
  res.json({msg:"you are in the dashbord page"})
}


module.exports={
    register,
    login,
    dashboard
}