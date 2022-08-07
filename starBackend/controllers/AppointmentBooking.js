//this is whre the appointment booking is done
const appointments=require('../model/Appointment');


//this is where the appointment booking is done
const postAppointment=async(req,res)=>{
   const data={name,email,number,date}={...req.body}
   console.log(data)
}
    



//this is will help us get the all the  booked appointments
const getAppointments=async(req,res)=>{
  
}


const updateAppointment=async(req,res)=>{
    try {
        res.send("update")
    } catch (error) {
        console.log("an error occured")
    }
}

module.exports={
    postAppointment,
    getAppointments,
    updateAppointment,
}
