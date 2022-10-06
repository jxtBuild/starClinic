const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const ProfileSchema=new mongoose.Schema({
  firstname:{
    type:String,
    required:[true,'please provide a name']
  },
  lastname:{
    type:String,
    required:[true,'please provide your lastname'],
  },
  email:{
    type:String,
    unique:true,
    required:[true,'please provide your email'],
    sparse:true
  },
  password:{
    type:String,
    required:[true,'please provide your password'],
    minlength:8,
  }
})
//hashing of the password is done here
ProfileSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

ProfileSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  )
}

ProfileSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}



module.exports=mongoose.model('Profile',ProfileSchema)