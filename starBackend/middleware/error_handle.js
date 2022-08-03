//middleware to handle some errors
const errorHandle=(err,req,res,next)=>{
 return res.status(500).json({msg:'something went wrong please try again'})
}

module.exports=errorHandle;