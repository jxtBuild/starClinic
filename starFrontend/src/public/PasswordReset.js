const newPassword=document.querySelector('.newPassword');
const confirmPassword=document.querySelector('.confirmPassword');
const nextbutton=document.querySelector('.nextbutton')



nextbutton.addEventListener("click",()=>{
    alert("helllo")
    axios.get("https://starclinic.herokuapp.com/authentication/reset-Password ")
    // http://localhost:5000/authentication/reset-Password
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
})