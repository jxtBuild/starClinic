let Login_password=document.querySelector('.L_password');
let passwordCheck=document.querySelector(".passwordCheck");
let message=document.querySelector('.message')
let loginsuccess=document.querySelector('.loginsuccess')
let errmessage=document.querySelector('.errmessage')
let submitButton=document.querySelector('.submitButton')
const signButton=document.querySelector(".signButton")
let signFirstname=document.querySelector(".signFirstname")
let signLastname=document.querySelector(".signLastname")
let signEmail=document.querySelector(".signEmail")
let signPassword=document.querySelector(".signPassword")
let success=document.querySelector('.success')





//View Password functionality
passwordCheck.addEventListener("click",()=>{
     if(Login_password.type==="password"){
      Login_password.type="text"
     }else{
      Login_password.type="password"
     }
       
})

//login function 
const loginButton=document.querySelector('.loginButton')
let LoginEmail=document.querySelector(".loginEmail")
let LoginPassword=document.querySelector(".L_password")



loginButton.addEventListener("click",()=>{
    email=LoginEmail.value
    password=LoginPassword.value
    const profile={email,password}
    axios.post("http://localhost:5000/authentication/login",profile)
    .then((res)=>{
         const {data}=res
           const name=data.user.name
          LoginEmail.value=""
          LoginPassword.value=""
          loginsuccess.style.display='flex'
          localStorage.setItem('token',data.token)
         localStorage.setItem('user',name)
         window.location.href='./index.html'
     })
     .catch((error)=>{
          const loginwarn=document.querySelector(".loginwarn")
          loginwarn.style.display="flex"
     })
})

//Sign Up function




signButton.addEventListener("click",()=>{
   firstname=signFirstname.value
   lastname=signLastname.value
   email=signEmail.value
   password=signPassword.value
   const data={firstname,lastname,email,password}
   axios.post("http://localhost:5000/authentication/register",data)
   .then((res)=>{
         if(res){
            success.style.display="flex"
         }
            signFirstname.value=""
           signLastname.value=""
            signEmail.value=""
            signPassword.value=""
         
   })
   .catch((err)=>{
      const signwarn=document.querySelector(".signwarn")
      if(err){
         signwarn.style.display="flex"
      }
   })
})




