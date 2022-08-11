const fullName=document.querySelector('.fullName') //selecting the fullname
const customerEmail=document.querySelector('.customerEmail') //selecting the email value
const phoneNumber=document.querySelector('.phoneNumber')  //selecting the phoneNumber
const dateTime=document.querySelector('.dateTime') //selecting the date value
const formDom=document.querySelector('.form'); //selecting the form
const doctorname=document.querySelector('.doctorName');//for doctor value
//const service=documnet.querySelector()
const submitButton=document.querySelector('.submitButton') //selecting the form submitting button




//function to make the post request to the server
async function postData(){
    let name=fullName.value 
    let email=customerEmail.value
    let phone=phoneNumber.value
    let date=dateTime.value
    let doctor=doctorname.value
    const data={name,email,phone,date,doctor} //creating an object for the data values
       await axios.post('http://localhost:5000/appointment/page',data)
         .then((res)=>{
         })
         .catch((err)=>{
            console.log('an error occured')
         })
   }

//form submiting function
submitButton.addEventListener('click',(e)=>{
   e.preventDefault(); //prevent the page from refreshing
   postData();//calling the  postData function
})





