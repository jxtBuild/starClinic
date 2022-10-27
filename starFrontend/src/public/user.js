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
const signwarn=document.querySelector(".signwarn")
const loginButton=document.querySelector('.loginButton')
let LoginEmail=document.querySelector(".loginEmail")
let LoginPassword=document.querySelector(".L_password")
const loginwarn=document.querySelector(".loginwarn")
const usergender=document.getElementsByName('Sex')





//View Password functionality
passwordCheck.addEventListener("click",()=>{
     if(Login_password.type==="password"){
      Login_password.type="text"
     }else{
      Login_password.type="password"
     }
    
})





loginButton.addEventListener("click",()=>{
    email=LoginEmail.value
    password=LoginPassword.value
    const profile={email,password}
    axios.post("https://starclinic.herokuapp.com/authentication/login ",profile)
    //   http://localhost:5000/authentication/login
    .then((res)=>{
         const {data}=res
         const name=data.user.name
         clearLoginform()        
         localStorage.setItem('token',data.token)
         localStorage.setItem('user',name)
         setTimeout(()=>{
         window.location.href="./index.html"
        },3000)  
     })
     .catch((error)=>{
          loginwarn.style.display="flex"
     })
  
})

//Sign Up function




signButton.addEventListener("click",()=>{
 firstname=signFirstname.value
 lastname=signLastname.value
 email=signEmail.value
 password=signPassword.value 
 gender=GenderFunction()
 const data={firstname,lastname,gender,email,password}
 axios.post("https://starclinic.herokuapp.com/authentication/register",data)
 //  http://localhost:5000/authentication/register
 .then((res)=>{
       if(res){
          success.style.display="flex"
          clearform()
       }
       setTimeout(()=>{
       window.location.href="./index.html"
      },3000)   
       
 })
 .catch((err)=>{
    console.log(err)
    if(err){
       signwarn.style.display="flex"
    }
 })
 

   
})


const clearform=()=>{
      signFirstname.value=""
      signLastname.value=""
      signEmail.value=""
      signPassword.value=""
}

const clearLoginform=()=>{
   LoginEmail.value=""
   LoginPassword.value=""
   loginsuccess.style.display='flex'
}

const GenderFunction=()=>{
 for(i = 0; i < usergender.length; i++) 
      {
                if(usergender[i].checked)
                return usergender[i].value
            }
         
}