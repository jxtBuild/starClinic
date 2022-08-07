const Profile=require('../model/profiledetails');



const register=async (req,res)=>{
    const data={...req.body}
    Profile.create(data)
    res.send(data.firstname)
}

const login=async (req,res)=>{
    const data={...req.body};
   const request=Profile.find(data.email)
   if(request){
    console.log("found")
   }
}



module.exports={
    register,
    login
}