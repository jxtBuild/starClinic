//laoding the user booked appointments
const date=document.querySelector('.date')
const time=document.querySelector('.time')
const service=document.querySelector('.service')
const status=document.querySelector('.status')
const doctor=document.querySelector('.doctor')
const noAppointment=document.querySelector('.noAppointment')
const totalAppointment=document.querySelector('.numberAppointment')
const numberAppointment=document.querySelector('.numberAppointment')
const removeAppointment=document.querySelector('.removeAppointment')
const showButton=document.querySelector('.showButton')
let profile=document.querySelector('.name')



const loadUserBookedAppointments= ()=>{
    const token=localStorage.getItem('token')
    axios.get('https://starclinic.herokuapp.com/appointment',{
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
        console.log(appointment[1]);
        appointment.map((items)=>{
            DoctorVariable(items)
            showButton.style.display="flex"
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

removeAppointment.addEventListener("click",()=>{
    alert("you want to remove me")
})

const DoctorVariable=(items,index)=>{
    date.innerHTML=items.date
    service.innerHTML=items.service
    if(items.doctor){
        doctor.innerHTML=items.doctor
    }else{
        doctor.innerHTML="-"
    }
    status.innerHTML=items.status
}