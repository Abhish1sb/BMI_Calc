const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile( __dirname + "/index.html");
})
app.post("/",function(req,res){
    var h=parseFloat(req.body.height);
    var w=parseFloat(req.body.weight);
    var result=w/(h*h);
    res.send(`The Bmi is:${result}`);
})
app.listen(3000,function(){
    console.log('Listening to the server at port 3000');
    // console.log(__dirname);
})
