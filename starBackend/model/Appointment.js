//creating the appointment model

const mongoose=require('mongoose');

const appointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,   
    },
    email:{
        type:String
    },
    service:{
        type:String
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10,
    },
    date:{
        type:String,
        required:true,
    },
    doctor:{
        type:String
    },
    status:{
        type:String,
        enum:['pending','canceled','attended'],
        default:'Pending'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Profile',
      required: [true, 'Please provide user'],
    },
},{timestamps:true});

module.exports=mongoose.model('Appointment',appointmentSchema);