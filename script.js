const express = require('express')
const app = express()

app.get('/app',(req,res)=>{
    res.send('Testing app')
})

app.listen(3000,()=>{
    console.log('Example app listening on port 3000!')
})