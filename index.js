const express = require('express');
const app =express();
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("working");
})
router.get('/user',(req,res,next)=>{
    res.send("this is user response");
})

router.get('/product',(req,res,next)=>{
    res.send("this is product response");
})


app.use(router);

app.listen('8080',()=>{
    console.log("server started");
})
