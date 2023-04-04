// for requiring express
const express = require("express");
// ecorporaed in our app 
const bodyParser= require("body-parser");
// setup a new app useing express module
const app = express();
// creating a home rout
// useing body parser with express
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    // __dirname is a constent
    res.sendFile(__dirname + "/index.html");
});
// makeing a postrequrst
app.post("/",function(req,res){
var w1 =(req.body.num1);
var w2 =(req.body.num2);
var w3 =(req.body.num3);
if (w3=="+") {
    var result = w1+w2;
} if (w3=="-") {
    var result = w1-w2;

}if (w3=="/") {
    var result = w1/w2;
}
if (w3=="%") {
    var result = w1%w2;
}
if (w3=="*") {
    var result = w1*w2;
}
res.send("sum is " +result);
// var w3 =parseFloat(req.body.num3);
// var w4 =parseFloat(req.body.num4);
// var result1 = w4/(w3*w4);
// res.send("sum is " +result1);

});
// after defineing rout we are going to spin up our server 
app.listen(3000,function(){
    console.log("server is running in port 3000");
});