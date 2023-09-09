const User=require("../model/user");

//Register the item
const register =async (req,res)=>
{
  const Bookname=req.body.Bookname;
  const Bookauth=req.body.Bookauth;
  const Bookstart=req.body.Bookstart;
  const Bookend=req.body.Bookend;
  const Bookctg=req.body.Bookctg;
  //console.log(Name+" "+Age);
  try
  {
     const user=await User.create({
        Bookname,
        Bookauth,
        Bookstart,
        Bookend,
        Bookctg
     });
     res.json({
        status:"Succees",
        Bookname:user.Bookname,
        Bookauth:user.Bookauth,
        Bookstart:user.Bookstart,
        Bookend:user.Bookend,
        Bookctg:user.Bookctg,
     });
 }
 catch(err)
 {
    res.json( 
    {
       status:"failed",
       data:err  
    })
 }
}

//Retrive the item
const retriveall=async(req,res)=>
{
   try{
   const retrivebooks=await User.find();
   res.json(
      {
         status:"Success",
         Book:retrivebooks,
      }
   )
   }
   catch(err)
   {
      res.json(
         {
            status:"Failed",
            data:err
         }
      )
   }
}

//Update the item
const updateone=async(req,res)=>{
   try{
      const {id}=req.params;
      const Book=await User.findByIdAndUpdate(id,req.body,{
         new:true,
         runValidators:true
      })
      res.json({
         status:"Success",
         Book: Book
      })
   }
   catch(err)
   {
      res.json({
         status:"Failed",
         data:err
      })
   }
}

//Delete the item
const deleteone=async(req,res)=>{
   
     const id=req.params.id;
     await User.findByIdAndRemove(id).exec();

}

//Retrive one item
const retriveone=async(req,res)=>{
   try{
      const id=req.params.id;
      const Book=await User.findById(id,req.body,{
         new:true,
         runValidators:true
      })
      res.json({
         status:"Success",
         Book:Book
      })
   }
   catch(err)
   {
      res.json({
         status:"Failed",
         data:err
      })
   }
}

module.exports={register,retriveall,updateone,deleteone,retriveone};