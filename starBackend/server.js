const express=require('express')
const app=express()
const connection=require('./db/connection')
const authRoute=require('./routers/authRoute')
const appointmentRoute=require('./routers/bookAppointmentRoute');
const cors=require('cors')
const port=process.env.PORT || 5000
const errorHandle=require('./middleware/error_handle')
require('dotenv').config()
const {verifyUser}=require('./middleware/authentication')





app.use(cors({
  origin:true,
  credentials:true
}))
app.use(express.json());
//routes
app.use("/authentication",authRoute)
app.use("/appointment",verifyUser,appointmentRoute)

//error Handler middleware
app.use(errorHandle)

app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(port,()=>{
    console.log("connected")
})


const start=async(req,res)=>{
    try
    {
      await connection(process.env.MONGO_URI)
    }
    catch(error){
      console.log("an error occured")
    }
}
start()



