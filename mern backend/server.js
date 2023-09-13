const express=require("express");
const dbconnect=require("./utils/dbconnect");
const userroutes=require("./routes/userroutes");
const cors=require("cors");
const SendMail=require("../mern backend/utils/sendEmail");
const multer=require('multer');
const app=express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/',async(res,req)=>{
    res.render('email-form');
})

app.post("/send-email",async(req,res)=>{
    const email=req.body.Email;
    const message=req.body.Message;
    try{
       SendMail(email,message);
       res.send({
        Email:email,
        message:message
       })
    }
    catch(error)
    {
        res.json(error);
    }
})

//User routes
app.use('/api/v5/users',userroutes);

app.listen(8000,()=>{
    console.log("Port is running at "+ 8000);
})

