const nodemailer=require('nodemailer')



const mailTransport=()=> nodemailer.createTransport({
    host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAII_PASSWORD
  }
});



module.exports=mailTransport
