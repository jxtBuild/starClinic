//this is whre the appointment booking is done
const appointments=require('../model/Appointment');


//this is where the appointment booking is done
const postAppointment=async(req,res)=>{
     const appointment=await appointments.create({...req.body});
     try {
         if(appointment){
        res.send(`<h1>your appointment has been booked successfully</h1>`)
     }
     }
      catch (error) {
        res.send('<h1>An error occured</h1>')
      }
}
    



//this is will help us get the all the  booked appointments
const getAppointments=async(req,res)=>{
    try{
        const appointments=await appointments.find();
        res.status(200).json(appointments);
       
    }
    catch(err){
        res.status(500).json({message:err});
    }
  
}

module.exports={
    postAppointment,
    getAppointments
}
