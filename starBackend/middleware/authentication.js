//authentiction middleware
const Profile=require('../model/profiledetails');
const jwt=require('jsonwebtoken')
const { UnauthenticatedError,BadRequestError}=require('../errors')
const PasswordToken=require('../model/PasswordResetToken')


const verifyUser=async (req,res,next)=>{
   const authHeader=req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new UnauthenticatedError('Authentication Invalid')
  }
  
  const token=authHeader.split(' ')[1]
  try {
    const payload=jwt.verify(token,process.env.JWT_SECRET)
     req.user={userId:payload.userId,firstname:payload.firstname}
     next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}


const VerifyReset=async (req,res,next)=>{
  const {id,token}=req.query
  if(!id || !token){
    throw new UnauthenticatedError('Please provide the details')
  }
  const user = await Profile.findOne({id:id})
   if(!user){
        throw new UnauthenticatedError('User not available')
   }
   const isMatch=await PasswordToken.compareToken(token)
   if(!isMatch){
    throw new UnauthenticatedError('credentials invalid')
   }
   req.user=user
}

module.exports={
  verifyUser,
  VerifyReset
};