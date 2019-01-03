var express=require('express');
var app=express();
var port=process.env.PORT || 4000;
app.set("view engine","ejs")
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("index");
})
app.listen(port,()=>{
  console.log("App is starting");
})
