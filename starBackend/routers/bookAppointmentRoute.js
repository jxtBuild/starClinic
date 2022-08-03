const express=express();
const router=express.Router();
const {
    postAppointment,
    getAppointments
}=require('../controllers/AppintmentBooking')




router.post('/',postAppointment)
router.get('/',getAppointments)




module.exports=router;