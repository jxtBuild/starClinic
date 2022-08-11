//login function 
const login_button=document.querySelector('.Lbutton')
let Login_email=document.querySelector(".Lemail")
let Login_password=document.querySelector(".Lpassword");
let User=document.querySelector('.name')
const passwordCheck=document.querySelector(".passwordCheck");

login_button.addEventListener("click",()=>{
    email=Login_email.value
    password=Login_password.value
    const data={email,password}
    axios.post("http://localhost:5000/authentication/login",data)
    .then((res)=>{
           window.location.href="./Info.html"
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
         console.log(res.data)
   })
   .catch((err)=>{
      console.log("an error occured");
   })
})