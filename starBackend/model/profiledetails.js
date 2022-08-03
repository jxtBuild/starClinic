const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  username:{
    type:String,
    required:[true,'please provide your username'],
    minlength:5,
    unique:true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
});

//hashing of the password is done here
UserSchema.pre('save',async function (){
  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
})


module.exports=mongoose.model('User',UserSchema)