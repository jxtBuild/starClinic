//authentiction middleware
const jwt=require('jsonwebtoken')

const verifyUser=(req,res,next)=>{
  const authHeader=req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    res.json({msg:"please login again"})
  }
  const token=authHeader.split(' ')[1]
   try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const {id,username}=decoded
    req.user={id,username}
    next()
   } catch (error) {
    
   }
}


module.exports=verifyUser;