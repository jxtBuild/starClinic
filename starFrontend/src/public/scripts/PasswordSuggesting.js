const passwordBox=document.querySelector(".passwordBox")
const option=document.querySelector(".option")

const getPassword=()=>{
    const chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={[}]|\:;<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    let passwordLength=10
    let password=""
    let i
    for (i=1;i<=passwordLength;i++){
        let randomNumber=Math.floor(Math.random()*chars.length)
        password+=chars.substring(randomNumber,randomNumber+1)
        option.innerHTML=password
    }
  
}

passwordBox.addEventListener("click",()=>{
    getPassword()
})