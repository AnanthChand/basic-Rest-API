const express = require("express");
const bodyparcer = require("body-parser")
const app = express();
const PORT = 3000;


app.use(bodyparcer.json());


app.get("/", (req,res)=>{
    console.log("Test");
    
})


app.listen(PORT, ()=>console.log("Server running on port 3000."))