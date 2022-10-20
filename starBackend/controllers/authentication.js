const Profile=require('../model/profiledetails');
const Verification=require('../model/UserVerification')
const {GenerateOTP}=require('../middleware/authentication')
const { StatusCodes } = require('http-status-codes');
const {BadRequestError,UnauthenticatedError}=require('../errors');
const mailTransport=require('../controllers/Mail')
const PasswordToken=require('../model/PasswordResetToken')
const jwt=require('jsonwebtoken');
const crypto=require('crypto')



const register=async (req,res)=>{
   const {email}=req.body.email
    const search=await Profile.findOne({email})
    if(search){
      throw new BadRequestError('A user with this email already exist')
    } 
   const user = await Profile.create(req.body)
   const OTP=user.GenerateOTP()
   const createOTP= await Verification.create({owner:user._id,OneTimePassword:OTP})
    user.createJWT()
    mailTransport().sendMail({
     from:'secure4@gmail.com',
     to:user.email,
     subject:"Verify your gmail account",
     html:`<h2>${OTP}</h2>`
   })
   res.status(StatusCodes.CREATED).json({ msg:"Please check your email for a verification token"})
}


const VerifyEmail=async (req,res)=>{
   const {OTP}=req.body
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
  //compare password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
   
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.firstname }, token })
}


const PasswordRecovery= async (req,res)=>{
  const {email}=req.body
  if(!email){
    throw new BadRequestError('Invalid Credentials')
  }
  const userAccount= await Profile.findOne({email:email})
   if(!userAccount){
    throw new UnauthenticatedError('Invalid Credentials')
   }
   if(userAccount){
    const passwordToken = crypto.randomBytes(30).toString('hex');
      mailTransport().sendMail({
     from:'secure4@gmail.com',
     to:userAccount.email,
     subject:"Verify your gmail account",
     html:`<h2>${passwordToken}id=${userAccount._id}</h2>`//placed a password reset link page
   })
  await PasswordToken.create({owner:userAccount._id,resetToken:passwordToken})
   }
   res.json({msg:"token has been sent"})
}


const resetPassword=async(req,res)=>{
  res.json({msg:"hello"})
}

module.exports={
    register,
    login,
    PasswordRecovery,
    VerifyEmail,
    resetPassword
}