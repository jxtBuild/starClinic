const express=require('express');
const router=express.Router();
const {
    register,
    login,
    dashboard
}=require('../controllers/authentication')
const verifyUser=require('../middleware/authentication')

router.post("/register",register);
router.post("/login",login);









module.exports=router;