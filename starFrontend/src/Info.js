//laoding the user booked appointments

let appointments
const loadUserBookedAppointments= ()=>{
    axios.get('http://localhost:5000/appointment')
    .then((res)=>{
         appointments=res.data
         data(appointments)
    })
    .catch((err)=>{
        console.log('an error occured')
        const errorMessage=document.querySelector('.error')
        errorMessage.style.display="flex"
        errorMessage.innerHTML='an error occured while trying to load your booked appointments'
    })
}

const data =(appointment)=>{
  /* console.log(appointment)
   for (name in appointment){
       console.log(appointment[name])
   }
   */
  
}
