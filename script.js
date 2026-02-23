const express = require('express')
const axios = require('axios');

const {response} = require("express");
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

app.post("/submit", async function (req, res) {



    const apikey= 'c6e19990e5fc4c9694540b9247b0c56e';
    const query = 'pasta';
    const number = 1;
    const response1 = await axios.get('https://api.spoonacular.com/recipes/complexSearch?', {
        params: {
            apiKey: apikey,
            query: query,
            number: number
        }
    });
    console.log(response1.data);



})