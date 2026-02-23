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

    console.log(req.body);

    const apikey= 'bd5ad30e5ac449b083d4b92070169568';
    const query = 'pasta';
    const number = 1;
    const diet = req.body.diet;
    const cuisine = req.body.cuisine ;
    const intolerances = req.body.intolerances;
    const minCholesterol = req.body.minCholesterol  || 0;
    const maxCholesterol = req.body.maxCholesterol || 0;
    const minProtein = req.body.minProtein  || 10;
    const maxProtein = req.body.maxProtein || 100;
    const minFat = req.body.minFat || 1;
    const maxFat = req.body.maxFat || 100;
    const minSugar = req.body.minSugar || 0;
    const maxSugar = req.body.maxSugar || 100;
    const addRecipeInformation = true;
    const response1 = await axios.get('https://api.spoonacular.com/recipes/complexSearch?',
        {
        params: {
            apiKey: apikey,
            diet: diet,
            cuisine: cuisine,
             minCholesterol: minCholesterol,
             maxCholesterol: maxCholesterol,
            minProtein: minProtein,
            maxProtein: maxProtein,
             minFat: minFat,
            maxFat: maxFat,
             minSugar: minSugar,

             maxSugar: maxSugar,
            number: number,
                addRecipeInformation: addRecipeInformation
        }
    });
    console.log(response1.data);
    res.json(response1.data);
    //res.send(response1.data);


})