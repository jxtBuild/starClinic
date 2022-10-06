
const appointments=require('../model/Appointment');
const { StatusCodes } = require('http-status-codes');
const {BadRequestError,UnauthenticatedError}=require('../errors');




const postAppointment=async(req,res)=>{
    req.body.createdBy=req.user.userId
    const appointment=await appointments.create(req.body)
    res.status(StatusCodes.CREATED).json({appointment})
}
    

const getAppointments=async(req,res)=>{
   const appointment=await appointments.find({createdBy:req.user.userId})
   res.status(StatusCodes.OK).json({total:appointment.length,appointment:appointment})
}


const updateAppointment=async(req,res)=>{
    const {id}=req.params
    const appointment=await appointments.findOne({id})
      res.json("update job")
}

const cancelAppointment=async(req,res)=>{

}

module.exports={
    postAppointment,
    getAppointments,
    updateAppointment,
}
