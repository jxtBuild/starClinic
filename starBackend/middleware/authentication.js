//authentiction middleware
const Profile=require('../model/profiledetails');
const jwt=require('jsonwebtoken')
const { UnauthenticatedError,BadRequestError}=require('../errors')



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


module.exports={
  verifyUser,
};