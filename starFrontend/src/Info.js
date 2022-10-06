//laoding the user booked appointments
const date=document.querySelector('.date')
const time=document.querySelector('.time')
const service=document.querySelector('.service')
const status=document.querySelector('.status')
const doctor=document.querySelector('.doctor')
const noAppointment=document.querySelector('.noAppointment')
const totalAppointment=document.querySelector('.numberAppointment')
const numberAppointment=document.querySelector('.numberAppointment')
let profile=document.querySelector('.name')



const loadUserBookedAppointments= ()=>{
    const token=localStorage.getItem('token')
    axios.get('http://localhost:5000/appointment',{
           headers:{
            Authorization:`Bearer ${token}`
           }
    })
    .then((res)=>{
        const data=res.data
       data?noAppointment.style.display='hidden':noAppointment.style.display='flex'
       const appointment=data.appointment
       profile.innerHTML=localStorage.getItem('user')
        numberAppointment.innerHTML=data.total
        console.log(appointment)
        appointment.map((items)=>{
            date.innerHTML=items.date
            service.innerHTML=""
            doctor.innerHTML=items.doctor
            status.innerHTML=items.status
        })
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

