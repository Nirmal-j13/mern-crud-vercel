const nodemailer=require("nodemailer");

const sendEmail=async(to,messagecontent)=>{
    try{
       //create transporter
       const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"nirmalnj2003@gmail.com",
            pass:"mvsopfditrlstnyg",
        }
       })
       //message object
       const message={
        to,
        subject:"New Message from BookMangement App",
        html:`
        <h3>you have received a new message from BookManagement App</h3>
        <p>${messagecontent}</p>
        `
       }
       //send the email
       const info=await transporter.sendMail(message);
       console.log('Message sent',info.messageId);
    }
    catch(error){
      console.log(error);
      throw new Error("Email Could not be sent");
    }
};
module.exports=sendEmail;