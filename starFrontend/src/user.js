let Login_password=document.querySelector('.L_password');
let passwordCheck=document.querySelector(".passwordCheck");
let button=document.getElementById("loginButton")

//View Password functionality
passwordCheck.addEventListener("click",()=>{
     if(Login_password.type==="password"){
      Login_password.type="text"
     }else{
      Login_password.type="password"
     }
     
})


//disable button functionality




//login function 
const login_button=document.querySelector('.Lbutton')
let Login_email=document.querySelector(".Lemail")
let User=document.querySelector('.name')

//const disableFunction=()=>{
//    if(Login_email.value==="" & Login_password.value===""){
//      button.disabled=true
//    }
//}
//
//disableFunction()

login_button.addEventListener("click",()=>{
   alert("hello")
    email=Login_email.value
    password=Login_password.value
    const data={email,password}
    axios.post("http://localhost:5000/authentication/login",data)
    .then((res)=>{
          // window.location.href="./Info.html"
     })
     .catch((err)=>{
          console.log("an error occured")
     })
})



//Sign Up function
const Sign_button=document.querySelector(".S_signUp")
let Sign_firstname=document.querySelector(".S_firstname")
let Sign_lastname=document.querySelector(".S_lastname")
let Sign_email=document.querySelector(".S_email")
let Sign_password=document.querySelector(".S_password")
Sign_button.addEventListener("click",()=>{
   firstname=Sign_firstname.value
   lastname=Sign_lastname.value
   email=Sign_email.value
   password=Sign_password.value
   const data={firstname,lastname,email,password}
   axios.post("http://localhost:5000/authentication/register",data)
   .then((res)=>{
         
   })
   .catch((err)=>{
      console.log("an error occured");
   })
})