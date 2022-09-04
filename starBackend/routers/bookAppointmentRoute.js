const express=require('express');
const router=express.Router();
const {
    postAppointment,
    getAppointments,
    updateAppointment
}=require('../controllers/AppointmentBooking')
const verifyUser=require('../middleware/authentication')



router.post('/page',postAppointment)
router.get('/',getAppointments)
router.patch("/",updateAppointment)




module.exports=router;