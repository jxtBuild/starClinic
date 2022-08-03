const express=require('express')
const app=express()
const connection=require('./db/connection')
const authRoute=require('./routers/authRoute')
const appointmentRoute=require('./routers/bookAppointmentRoute');
const port=process.env.PORT || 5000
require('dotenv').config()






app.use(express.json());
app.use("/authentication",authRoute)
app.use("/appointment",appointmentRoute)




app.listen(port,()=>{
    console.log("connected")
})

const connection=async()=>{
   await connection(process.env.MONGO_URI)
}

connection()


