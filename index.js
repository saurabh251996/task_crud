require("./database/db");
const express=require("express");
const bodyparse=require("body-parser");
const route=require("./routes/route");
const mongoose=require("mongoose");

const app=express();
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));

app.use("/user",route);
//Server is listening
app.listen(3000,()=>{
    console.log("server running on port 3000");
})
