let Login_password=document.querySelector('.L_password');
let passwordCheck=document.querySelector(".passwordCheck");



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
//let User=document.querySelector('.name')
loginButton.addEventListener("click",()=>{
    email=LoginEmail.value
    password=LoginPassword.value
    alert(email,password)
    const data={email,password}
    axios.post("http://localhost:5000/authentication/login",data)
    .then((res)=>{
          console.log(res)
     })
     .catch((err)=>{
          const loginwarn=document.querySelector(".loginwarn")
          if(err){
            loginwarn.style.display="flex"
          }
     })
})



//Sign Up function
const signButton=document.querySelector(".signButton")
let signFirstname=document.querySelector(".signFirstname")
let signLastname=document.querySelector(".signLastname")
let signEmail=document.querySelector(".signEmail")
let signPassword=document.querySelector(".signPassword")

signButton.addEventListener("click",()=>{
   firstname=signFirstname.value
   lastname=signLastname.value
   email=signEmail.value
   password=signPassword.value
   const data={firstname,lastname,email,password}
   alert(data)
   axios.post("http://localhost:5000/authentication/register",data)
   .then((res)=>{
         console.log(res)
   })
   .catch((err)=>{
      const signwarn=document.querySelector(".signwarn")
      if(err){
         signwarn.style.display="flex"
      }
   })
})

