const express= require("express");
const mongoose= require("mongoose");
const  route = require("./routes/route");
const cors= require("cors")
const multer=require("multer")

const app=express();  

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())
app.use(multer().any())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })

mongoose.connect("mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/students",{
    useNewUrlParser:true
}).then(()=>{console.log("mongodb is connected")})
.catch((error)=>{console.log(error)})

app.use("/",route)

app.listen(process.env.PORT || 5000 ,()=>{
    console.log("sever is running on port "+(process.env.PORT || 5000)) 
})