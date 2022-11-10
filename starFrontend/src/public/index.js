const signButton=document.querySelector('.signButton');
const booked=document.querySelector('.booked')
const logOutButton=document.querySelector('.logOutButton')
const menu=document.querySelector(".menu")
const dropdown=document.querySelector(".dropdown")
const menuSign=document.querySelector(".menuSign")
const menuLogOut=document.querySelector(".menuLogOut")
const showMenu=document.querySelector(".showMenu")
const closeMenu=document.querySelector(".closeMenu")

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



showMenu.addEventListener("click",()=>{
     if(dropdown.style.display="none"){
      dropdown.style.display="block"
      showMenu.style.display="none"
      closeMenu.style.display="block"
     }
   })

closeMenu.addEventListener(("click"),()=>{
      if(dropdown.style.display="block"){
      dropdown.style.display="none"
      showMenu.style.display="block"
      closeMenu.style.display="none"
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