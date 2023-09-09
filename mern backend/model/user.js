const mongoose=require("mongoose");

const userschema = mongoose.Schema({
      Bookname:{
        type:String,
        required:true,
      },
      Bookauth:{
        type:String,
        required:true,
      },
      Bookstart:{
        type:String,
        required:true,
      },
      Bookend:{
        type:String,
        required:true,
      },
      Bookctg:{
        type:String,
        required:true,
      },
    },
    {
      timestamps:true,
      toJSON:{virtual:true},
    },
)

const User = mongoose.model("Class",userschema);

module.exports=User;