const express = require('express') //pour importer la bib express
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello Node API')
})

app.listen(3000,()=>{
    console.log('Node api is running on port 3000')
})