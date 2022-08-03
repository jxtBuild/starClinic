const express=require('express');
const router=express.Router();
const {
    postAppointment,
    getAppointments
}=require('../controllers/AppointmentBooking')




router.post('/',postAppointment)
router.get('/',getAppointments)




module.exports=router;