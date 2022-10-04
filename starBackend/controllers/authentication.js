const Profile=require('../model/profiledetails');
const { StatusCodes } = require('http-status-codes');
const {BadRequestError,UnauthenticatedError}=require('../errors')

const register=async (req,res)=>{
   const user = await Profile.create({ ...req.body })
   const token = user.createJWT()
   res.status(StatusCodes.CREATED).json({ user: { name: user.firstname }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await Profile.findOne({email})
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
   //compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.firstname }, token })
}






module.exports={
    register,
    login,
}