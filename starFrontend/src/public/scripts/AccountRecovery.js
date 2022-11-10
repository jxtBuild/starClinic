const Checkemail=document.querySelector(".Checkemail")
const nextbutton=document.querySelector(".nextbutton")
const message=document.querySelector(".message")


nextbutton.addEventListener("click",()=>{
    email=Checkemail.value
    const data={email}
    axios.post("https://starclinic.herokuapp.com/authentication/passwordchange",data)
    //     http://localhost:5000/authentication/passwordchange
    .then((res)=>{
        message.innerHTML=res.data.msg
    })
    .catch((err)=>{
        console.log(err);
    })
})

