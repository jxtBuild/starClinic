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
const error=document.querySelector('.error')
const errorMessage=document.querySelector('.errorMessage')
const reload=document.querySelector('.reloadbutton')
const appointment=document.querySelector('.appointment')
const appointmentTable=document.querySelector('.appointmentTable')
let profile=document.querySelector('.name')
const tabledata=document.querySelector('.tabledata')



const loadUserBookedAppointments= ()=>{
    const token=localStorage.getItem('token')
    axios.get('https://starclinic.herokuapp.com/appointment',{
        // http://localhost:5000/appointment
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
      const Information=appointment.map((items)=>{
              const {date,service,doctor,status,_id:appointmentId}=items
           return `  
                <tr class="bg-white border-b  hover:bg-gray-100 tabledata">
                              <td class="p-3 w-4">
                                  <div class="flex items-center">
                                      <input id="checkbox-table-search-1" type="checkbox"
                                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                  </div>
                              </td>
                              <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap date">
                                  ${date}
                              </td>
                              <td class="py-4 px-6 service">
                                  ${service}
                              </td>
                              <td class="py-4 px-6  doctor">
                                ${doctor}
                              </td>
                              <td class="py-4 px-6 status">
                                 ${status}
                              </td>
                              
                                    <td class="py-3 px-6   items-center">
                                         <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                                            ${status=="canceled"?" " :`<button class="font-medium text-red-600 ml-3 delete-btn" data-id="${appointmentId}">Cancel</button>`}
                                    </td>
                          </tr>
                          `
              
        })
        appointmentTable.innerHTML=Information
    })
    .catch((err)=>{
        appointment.style.display="none"
        error.style.display="flex"
        errorMessage.innerHTML="An error occured while trying to load your booked appointment click on the reload button"
        //this is  will load the page when the user clicks on the reload button
        reload.addEventListener("click",()=>{
            location.reload();
        })
    })
}

appointmentTable.addEventListener("click",async(e)=>{
     const el = e.target
    const id=el.dataset.id
    const token=localStorage.getItem('token')
    axios.delete(`https://starclinic.herokuapp.com/appointment/${id}`,{
        //http://localhost:5000/appointment/${id}
        headers:{
            Authorization:`Bearer ${token}`
           }
    })
    .then((res)=>{
    })
    .catch((error)=>{
        console.log(error);
    })
})

