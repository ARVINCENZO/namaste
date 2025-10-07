const express = require('express');

const app= express();

app.get("/user", (req,res)=>{
    res.send({firstName: "Shiva", Role: "Software Developer"})
})

app.post("/user",(req,res)=>{
    res.send("hello from the server man1");
})

app.use("/hi", (req,res)=>{
    res.send("Hi");
})




app.listen(3000, ()=>{
    console.log("server is running succcessfully");
});
