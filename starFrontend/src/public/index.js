//
const signButton=document.querySelector('.signButton');
const booked=document.querySelector('.booked')
const logOutButton=document.querySelector('.logOutButton')
const menu=document.querySelector(".menu")
const dropdown=document.querySelector(".dropdown")
const menuSign=document.querySelector(".menuSign")
const menuLogOut=document.querySelector(".menuLogOut")

const load=()=>{
  UserAuthentication()
}

menuSign.addEventListener("click",()=>{
   CheckToken()
})


signButton.addEventListener("click",()=>{
   CheckToken()
})

logOutButton.addEventListener("click",()=>{
  LogOut()
})

menuLogOut.addEventListener("click",()=>{
  LogOut()
})

booked.addEventListener("click",()=>{
   const token=localStorage.getItem('token')
  if(token){
     window.location.href='./Info.html'
  }else{
     window.location.href='./MainLogin.html'
  }
})



menu.addEventListener("click",()=>{
     if(dropdown.style.display="hidden"){
      dropdown.style.display="flex"
     }
     else{
      dropdown.style.display="flex"
     }
   })

const CheckToken=()=>{
    const token=localStorage.getItem('token')
    if(token){
        window.location.href="./index.html"
    }else{
 window.location.href="./MainLogin.html"
    }
}



const UserAuthentication=()=>{
    const token=localStorage.getItem('token')
   if(token){
      logOutButton.style.display="flex"
      menuLogOut.style.display="flex"
   }else{
      signButton.style.display="flex"
      menuSign.style.display="flex"
   }
}

const LogOut=()=>{
 localStorage.removeItem('token')
   location.reload()
}