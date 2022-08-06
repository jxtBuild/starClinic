const express=require('express')
const app=express()
const connection=require('./db/connection')
const authRoute=require('./routers/authRoute')
const appointmentRoute=require('./routers/bookAppointmentRoute');
const cors=require('cors')
const port=process.env.PORT || 5000
require('dotenv').config()





app.use(cors())
app.use(express.json());
app.use("/authentication",authRoute)
app.use("/appointment",appointmentRoute)




app.listen(port,()=>{
    console.log("connected")
})


const start=async()=>{
    try
    {
      await connection(process.env.MONGO_URI)
    }
    catch(error){
      console.log("an error occured with the database");
    }
}
start()



