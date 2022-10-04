//middleware to handle some errors
const {CustomAPIError}=require('../errors')
const {StatusCodes}=require('http-status-codes')
const errorHandle=(err,req,res,next)=>{
     if (err instanceof CustomAPIError) {
     return res.status(err.statusCode).send({ msg: err.message })
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again latter')
}

module.exports=errorHandle;