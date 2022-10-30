const newPassword=document.querySelector('.newPassword');
const confirmPassword=document.querySelector('.confirmPassword');
const nextbutton=document.querySelector('.nextbutton')



nextbutton.addEventListener("click",()=>{
    axios.get("http://localhost:5000/authentication/reset-Password ")
    //   https://starclinic.herokuapp.com/authentication/reset-Password
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
})