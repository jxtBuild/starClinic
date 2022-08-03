//creating the appointment model

const mongoose=require('mongoose');

//creating the schema for the appointmnet booking
const appointmentSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,   //if the name is not provided, it will throw an error
    },
       email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
    },
    date:{
        type:Date,
        required:true,
    },
    createdAT:{
        type:Date,
        default:Date.now()
    },
});

// exporting the model
//the *appointmentSchema* name will be appeared in the database as *appointments*
module.exports=mongoose.model('Appointment',appointmentSchema);