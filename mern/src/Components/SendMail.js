import React, { useState } from 'react';
import '../App.css';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
export const SendMail = () => {
  const [emailid,setemailid]=useState(null);
  const [recipient,setrecipent]=useState(null);
  
  const onHandleEmailId=(e)=>{
     setemailid(e.target.value);
    //console.log(emailid);
  }
  const onHandleRecipent=(e)=>{
    setrecipent(e.target.value);
   //console.log(recipient);
 }
  const onHandleEmailform=async(e)=>
  {
    e.preventDefault();
    if(emailid==null)
    {
       //console.log("sjdfs");
        return(
          <div>
        {toast.warn("Please fill the Emailid",{
            position: toast.POSITION.TOP_RIGHT
        })}
        </div>
        )
    }
    else 
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid))
      {
        //console.log(emailid);
        //emailjs.sendForm('service_id','template_id',e.target,'public_key')
       await fetch("https://mern-crud-vercel-frontend.vercel.app/send-email",{
          method:"POST",
          body:JSON.stringify({
            Email:emailid,
            Message:recipient
          }),
          headers: {
            "Content-Type": "application/json"
        }
        }).then((data)=>console.log(data));
        return(
          <div>
        {toast.success("Email Send Successfully",{
            position: toast.POSITION.TOP_RIGHT
        })}
        </div>
        )
      }
      else 
      {
        //console.log("sjnds");
        return(
          <div>
        {toast.error("Incorrect EmailId",{
            position: toast.POSITION.TOP_RIGHT
        })}
        </div>
        )
      }
    }
  }
  return (
    <div className='form'>
        <label className='sendmail'>BookMail Authenticator</label>
         <div className='form-child'>
            <form>
              <div className='EmailId'>
            <label for="Email_Id" class="block mb-2 text-left text-sm font-large text-black-900 light:text-white">Email Id</label>
        <input 
               type="text" placeholder="Email Id" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-10 h-2 border 
                      border-gray-700 rounded mb-2"
              itemType='email'
               input={emailid}
               onChange={onHandleEmailId}
              required/>
            </div>
            <textarea
               type="text" placeholder="Write to the recipient"
               rows={5}
               value={recipient}
               onChange={onHandleRecipent}
               class="block p-2.5  w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
              required/>
            <button  class="mt-2 relative rounded px-7 py-2.5 overflow-hidden group bg-orange-500 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
            onClick={onHandleEmailform}>
            <ToastContainer/>
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Send Mail</span>
</button>
<div>
<label style={{marginTop:"15px",fontSize:"12px"}}>2023 BookMail Authenticator.All rights reserved</label>
</div>
           </form>
         </div>
    </div>
  )
}
