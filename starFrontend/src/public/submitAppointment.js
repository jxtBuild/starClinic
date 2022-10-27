const fullName=document.querySelector('.fullName') //selecting the fullname
const customerEmail=document.querySelector('.customerEmail') //selecting the email value
const phoneNumber=document.querySelector('.phoneNumber')  //selecting the phoneNumber
const dateTime=document.querySelector('.dateTime') //selecting the date value
const formDom=document.querySelector('.form'); //selecting the form
const doctorname=document.querySelector('.doctorName');//for doctor value
//const service=documnet.querySelector()
const submitButton=document.querySelector('.submitButton') //selecting the form submitting button
const selectOption=document.querySelector('.selectOption')
const toast_success=document.querySelector('.toast-success')
const toast_danger=document.querySelector(".toast_danger")
const close=document.querySelector(".close")

//function to make the post request to the server
async function postData(){
   const token=localStorage.getItem('token')
const data={
   name:fullName.value ,
   email:customerEmail.value,
   phone:phoneNumber.value,
   date:dateTime.value,
   doctor:doctorname.value,
   service:selectOption.value,
}
   await axios.post('http://localhost:5000/appointment/page ',data,{
      //    https://starclinic.herokuapp.com/appointment/page
          headers:{        
             Authorization:`Bearer ${token}`      
            }  
           })      
          .then((res)=>{
          clearform()
          toast_success.style.display="flex"
          
         })
         .catch((err)=>{
            toast_danger.style.display="flex"
         })
   }

//form submiting function
submitButton.addEventListener('click',(e)=>{
   e.preventDefault(); //prevent the page from refreshing
   postData();//calling the  postData function
 
})

const clearform=()=>{
      fullName.value=""
       customerEmail.value=""
       phoneNumber.value=""
       dateTime.value=""
       selectOption.value=""
}



//const dateChecker=(date)=>{
//   let reply=false
//  if(date < new Date().getDate() || date == new Date().getDate()){
//    reply
//  }else{
//   reply=true
//  }
//  return reply
//}

close.addEventListener("click",()=>{
  Removenotification()
})
const Removenotification=()=>{
 toast_danger.style.display="hidden"
 alert("hello")   
}



