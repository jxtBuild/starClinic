const express=express();
const router=express.Router();
const {
    register,
    login
}=require('../controllers/authentication')


router.post("/register",register);
router.post("/login",login);








module.exports=router;