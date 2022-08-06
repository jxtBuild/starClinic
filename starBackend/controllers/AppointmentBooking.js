//this is whre the appointment booking is done
const appointments=require('../model/Appointment');


//this is where the appointment booking is done
const postAppointment=async(req,res)=>{
   const data={name,email,number,date}={...req.body}
   console.log(data)
}
    



//this is will help us get the all the  booked appointments
const getAppointments=async(req,res)=>{
    const data={"name":"emmanuel","email":"fred@gmail.com","phone":"0787878787","date":"2020-06-06"}
     //const jsonContent = JSON.stringify(data);
  res.json(data)
  console.log("it has been called")
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
