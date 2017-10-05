var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send("Happy Thursday!");
})

app.listen(8000, function (){
  console.log("Listening on 8000...");
})
