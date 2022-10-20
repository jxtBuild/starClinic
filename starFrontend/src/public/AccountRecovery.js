const Checkemail=document.querySelector(".Checkemail")
const nextbutton=document.querySelector(".nextbutton")



nextbutton.addEventListener("click",()=>{
    email=Checkemail.value
    const data={email}
    axios.post("https://starclinic.herokuapp.com/authentication/passwordchange",data)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
})

