const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');


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
    minlength:6
  }
})
//hashing of the password is done here
ProfileSchema.pre('save',async function (){
  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
})


module.exports=mongoose.model('Profile',ProfileSchema)