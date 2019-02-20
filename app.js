const express = require("express")
const path  =  require('path')
const app = express();

app.set(express.static(path.join(__dirname, 'assets')))

app.use(express.urlencoded({
    extended: true
}));

// app.set('view engine', 'ejs') 
// app.set('view',path.join(__dirname,'views'))



app.post('/api/resister',(req,res)=>{
    console.log(req.body())
})

app.listen(3000,()=>{
    console.log("3000")
})