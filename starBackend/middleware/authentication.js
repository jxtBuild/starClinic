//authentiction middleware
const Profile=require('../model/profiledetails');
const jwt=require('jsonwebtoken')

const verifyUser=async (req,res,next)=>{
  //checking the token header
  const authHeader=req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    res.json({msg:"please login again"})
  }
  const token=authHeader.split(' ')[1]
   try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user={user_id:decoded.id,firstname:decoded.firstname}
    next()
   } catch (error) {
     res.json({msg:"please and error occured "})
   }
}


module.exports=verifyUser;