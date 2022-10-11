//
const signButton=document.querySelector('.signButton');
const booked=document.querySelector('.booked')
const logOutButton=document.querySelector('.logOutButton')


const load=()=>{
   const token=localStorage.getItem('token')
   if(token){
      logOutButton.style.display="flex"
   }else{
      signButton.style.display="flex"
   }
}

signButton.addEventListener("click",()=>{
    const token=localStorage.getItem('token')
    if(token){
        window.location.href="./index.html"
    }else{
 window.location.href="./MainLogin.html"
    }
   
})

logOutButton.addEventListener("click",()=>{
   localStorage.removeItem('token')
   location.reload()
})

booked.addEventListener("click",()=>{
   const token=localStorage.getItem('token')
  if(token){
     window.location.href='./Info.html'
  }else{
     window.location.href='./MainLogin.html'
  }
})
