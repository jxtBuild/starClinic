const Profile=require('../model/profiledetails');
const jwt=require('jsonwebtoken');


const register=async (req,res)=>{
  const user=Profile.create({...req.body})
  const token=jwt.sign({User_id:user._id,firstname:user.firstname},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRY})
   res.status(200).json({msg:"user created",token,user})
}

const login=async (req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({msg:"please provide all the details"})
    }
    const user=await Profile.findOne({email})
    if(!user || !password){
        return res.status(400).json({msg:"user not found"})
    }
    const passwordMatch=await user.comparePassword(password);
    res.json({msg:"you are logged in",user,passwordMatch,password})
    if(!passwordMatch){
       return res.status(400).json({msg:"password is incorrect"})
     }
  const token=user.createToken()
 res.status(200).json({user:{firstname:user.firstname},token})
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