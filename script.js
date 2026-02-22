const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/app", function (req,res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/images/background1.jpg", function (req,res){
    res.sendFile(__dirname + "/images/background1.jpg")
});
app.listen(3000,()=>{
    console.log('Example app listening on port 3000!')
})

app.post("/submit", function (req,res){
    console.log(req.body)
    res.send("Data received")
})