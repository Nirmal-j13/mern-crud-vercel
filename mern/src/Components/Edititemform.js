import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function Edititemform()
{
   const [bookname, setbookname] = useState("");
   const [bookauth, setbookauth] = useState("");
   const [bookstart, setbookstart] = useState("");
   const [bookend, setbookend] = useState("");
   const [bookctg, setbookctg] = useState("");
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
     retrive();
    },[])
    const retrive=async()=>
    {
    try{
      //https://mern-crud-vercel.vercel.app/api/v5/users/retriveone
      let res=await fetch(`https://mern-crud-vercel.vercel.app/api/v5/users/retriveone/${id}`)
      res=await res.json();
      console.warn(res);
      console.log(res.Book.Bookname);
      console.log(res.Book.Bookauth);
      console.log(res.Book.Bookstart);
      console.log(res.Book.Bookend);
      console.log(res.Book.Bookctg);
      setbookname(res.Book.Bookname);
      setbookauth(res.Book.Bookauth);
      setbookstart(res.Book.Bookstart);
      setbookend(res.Book.Bookend);
      setbookctg(res.Book.Bookctg);
       }
       catch(e)
       {
          
       }
    }
          const HandleSubmit=async(event)=>
           {
              event.preventDefault();
            try{
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
                              {toast.warn('Bookauth  must be greater than 3 !', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
              if(bookctg.length<3)
              {
                    return(
                           <div>
                              {toast.warn('bookCategory  must be greater than 15 !', {
                           position: toast.POSITION.TOP_RIGHT
                             })}
                           </div>)
              }
          if(bookname.length>3&&bookauth.length>3&&bookctg.length>3&&bookstart!=null&&bookend!=null)
           {
            console.log(bookname);
            //https://mern-crud-vercel.vercel.app/api/v5/users/updateone
           let res= await fetch(`https://mern-crud-vercel.vercel.app/api/v5/users/updateone/${id}`, {
            method: "Put",
            body: JSON.stringify({
               Bookname:bookname,
               Bookauth:bookauth,
               Bookstart:bookstart,
               Bookend:bookend,
               Bookctg:bookctg,
            }),   
            headers: {
                "Content-Type": "application/json"
            }
        });
         res=await res.json();
         console.log(res);
         return(
              <div>
                {toast.info('Updated Successfully !', {
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
            animate-text mb-8 
            ">
           Update Book
        </h1>
        <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Name</label>
        <input 
               type="text" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
               value={bookname}
              onChange={(e)=>setbookname(e.target.value)}
              required/>
           <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Author</label>
        <textarea
               type="text" placeholder="Item Description (Max 50-60 Characters)"
               class="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
               value={bookauth} 
              onChange={(e)=>setbookauth(e.target.value)}
              required/>
      <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Start Date</label>
        <input 
               type="text" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookstart} 
              onChange={(e)=>setbookstart(e.target.value)}
              required/>
   <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">End Date</label>
        <input 
               type="text" placeholder="Item Name" 
               class="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
              value={bookend} 
              onChange={(e)=>setbookend(e.target.value)}
              required/>
   <label for="first_name" class="block mb-2 text-left text-sm font-medium text-black-900 light:text-white">Book Category</label>
         <input
               type="text" placeholder="Category" 
               class="text-sm text-gray-base w-full 
                       mr-3 py-5 px-4 h-2 border 
                      border-gray-700 rounded mb-2"
               value={bookctg} 
               onChange={(e)=>setbookctg(e.target.value)}
              required/>
       <button  class="mt-2 relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
       onClick={HandleSubmit}>
              <ToastContainer/>
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Update Book</span>
</button>
    </form>
    </div>
    )
}