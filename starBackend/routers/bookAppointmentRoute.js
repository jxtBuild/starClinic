const express=require('express');
const router=express.Router();
const {
    postAppointment,
    getAppointments
}=require('../controllers/AppointmentBooking')




router.post('/page',postAppointment)
router.get('/',getAppointments)




module.exports=router;