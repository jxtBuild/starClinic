const express=require('express');
const router=express.Router();
const {
    register,
    login,
    PasswordRecovery,
    VerifyEmail,
    resetPassword
}=require('../controllers/authentication')
const {
    VerifyReset
}=require("../middleware/authentication")


router.post("/register",register);
router.post("/login",login);
router.post("/passwordchange",PasswordRecovery)
router.post("/resetPassword",VerifyReset,resetPassword)
router.get("/verification",VerifyEmail)










module.exports=router;