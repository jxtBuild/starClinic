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
    uinque:true,
    required:[true,'please provide your password']
  },
  password:{
    type:String,
    required:[true,'please provide your password'],
    minlength:6,
    uique:true
  }
})
//hashing of the password is done here
ProfileSchema.pre('save',async function (){
  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
})


//using mongo isntance to get the name 
ProfileSchema.methods.createToken=function(){
  return jwt.sign({id:this._id,firstname:this.firstname},process.env.JWT_SECRET,{expiresIn:'2d'})
}


//comparing the password
ProfileSchema.methods.comparePassword=async function(password){
  const passwordmatch=await bcrypt.compare(password,this.password);
  return passwordmatch;
}
module.exports=mongoose.model('Profile',ProfileSchema)