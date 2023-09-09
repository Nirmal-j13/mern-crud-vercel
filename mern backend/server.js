const express=require("express");
const dbconnect=require("./utils/dbconnect");
const userroutes=require("./routes/userroutes");
const cors=require("cors");
const multer=require('multer');
const app=express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.post("/upldimg",async(req,res)=>{
    res.json("File Uploaded");
})
//User routes
app.use('/api/v5/users',userroutes);

app.listen(8000,()=>{
    console.log("Port is running at "+ 8000);
})

