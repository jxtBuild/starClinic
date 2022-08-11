//laoding the user booked appointments
const date=document.querySelector('.date')
const time=document.querySelector('.time')
const service=document.querySelector('.service')
const status=document.querySelector('.status')
const doctor=document.querySelector('.doctor')
const noAppointment=document.querySelector('.noAppointment')
const totalAppointment=document.querySelector('.numberAppointment')
const loadUserBookedAppointments= ()=>{
    axios.get('http://localhost:5000/appointment')
    .then((res)=>{
        const data=res.data
       data?console.log(data):noAppointment.style.display='flex'
    })
    .catch((err)=>{
        const error=document.querySelector('.error')
        const errorMessage=document.querySelector('.errorMessage')
        const reload=document.querySelector('.reloadbutton')
        const appointment=document.querySelector('.appointment')
        appointment.style.display="none"
        error.style.display="flex"
        errorMessage.innerHTML="An error occured while trying to load your booked appointment click on the reload button"
        //this is  will load the page when the user clicks on the reload button
        reload.addEventListener("click",()=>{
            location.reload();
        })
    })
}
const data =(appointment)=>{
  /* console.log(appointment)
   for (name in appointment){
       console.log(appointment[name])
   }
   */
  
}
