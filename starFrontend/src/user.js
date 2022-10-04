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
let LoginPassword=document.querySelector(".loginPassword")
//let User=document.querySelector('.name')
loginButton.addEventListener("click",()=>{
    email=LoginEmail.value
    password=LoginPassword.value
    alert(email,password)
    //const data={email,password}
    //axios.post("http://localhost:5000/authentication/login",data)
    //.then((res)=>{
    //      console.log(res)
    // })
    // .catch((err)=>{
    //      console.log("an error occured")
    // })
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
         console.log(res)
   })
   .catch((err)=>{
      console.log("an error occured");
   })
})