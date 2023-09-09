
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import 'react-toastify/dist/ReactToastify.css';
export default function Additemform() 
{
       const [bookname, setbookname] = useState("");
       const [bookauth, setbookauth] = useState("");
       const [bookstart, setbookstart] = useState("");
       const [bookend, setbookend] = useState("");
       const [bookctg, setbookctg] = useState("");
       const Handlename=(event)=>
       {
            setbookname(event.target.value);
              console.log(event.target.value);
       }
       const Handleauth=(event)=>
       {
            setbookauth(event.target.value);
              console.log(event.target.value);
       }
       const Handlestart=(event)=>
       {
            setbookstart(event.target.value);
              console.log(event.target.value);
       }
       const Handleend=(event)=>
       {
            setbookend(event.target.value);
              console.log(event.target.value);
       }
       const Handlectg=(event)=>
       {
            setbookctg(event.target.value);
              console.log(event.target.value);
       }
       const HandleSubmit=async(event)=>
       {
        try{
        event.preventDefault();
        if(bookname.length<3)
        {
              return(
                     <div>
                        {toast.warn('BookName must be greater than 3!', {
                     position: toast.POSITION.TOP_RIGHT
                       })}
                     </div>)
        }
        if(bookauth.length<3)
        {
              return(
                     <div>
                        {toast.warn('BookAuthor must be greater than 2 !', {
                     position: toast.POSITION.TOP_RIGHT
                       })}
                     </div>)
        }
        if(bookstart==null)
        {
              return(
                     <div>
                        {toast.warn('Start Date Required', {
                     position: toast.POSITION.TOP_RIGHT
                       })}
                     </div>)
        }
        if(bookend==null)
        {
              return(
                     <div>
                        {toast.warn('End Date Required', {
                     position: toast.POSITION.TOP_RIGHT
                       })}
                     </div>)
        }
        if(bookctg.length<3)
        {
              return(
                     <div>
                        {toast.warn('BookCategory  must be greater than 15 !', {
                     position: toast.POSITION.TOP_RIGHT
                       })}
                     </div>)
        }
        if(bookname.length>3&&bookname.length>3&&bookctg.length>3&&bookstart!=null&&bookend!=null)
        {
        //https://mern-crud-vercel.vercel.app/api/v5/users/register
        await fetch(`https://mern-crud-vercel.vercel.app/api/v5/users/register`, {
        method: "POST",
        body: JSON.stringify({
             Bookname:bookname,
             Bookauth:bookauth,
             Bookstart:bookstart,
             Bookend:bookend,
             Bookctg:bookctg,
        }),   
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json)).then(()=>setbookname(""),setbookauth(""),setbookstart(""),setbookend(""),setbookctg(""));
    return(
    <div>
       {toast.success('Successfully Added the Book !', {
    position: toast.POSITION.TOP_RIGHT
      })}
    </div>)
       }
}
       catch(e)
       {
      
       }
       }
     return(
        <div class="... flex items-center justify-center">
        <form class="mt-6">
        <h1 class="text-4xl font-bold 
            bg-gradient-to-g bg-clip-text  
            from-green-500 via--500 to-indigo-500
            animate-text mb-5
            ">
           Add Book
        </h1>
        <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Name</label>
        <input 
               type="text" placeholder="Book Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookname} 
              onChange={Handlename}
              required/>
       <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Author</label>
       <input 
               type="text" placeholder="Book Author" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookauth} 
              onChange={Handleauth}
              required/>
  <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Start Date</label>
        <input 
               type="text" placeholder="Start Date" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookstart} 
              onChange={Handlestart}
              required/>
   <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">End Date</label>
        <input 
               type="text" placeholder="End Date" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookend} 
              onChange={Handleend}
              required/>
   <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Category</label>
         <input
               type="text" placeholder="Book Category" 
               class="text-sm text-gray-base w-full 
                       mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
               value={bookctg} 
              onChange={Handlectg} 
              required/>
       <button  class=" relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
       onClick={HandleSubmit}>
              <ToastContainer/>
<span class="absolute right-0 w-8 h-32 -mt-12 mb-5 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Add Book</span>
</button>
    </form>
    </div>
    )
}