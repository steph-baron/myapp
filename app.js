var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send("Happy Thursday!");
})

app.get('/about/dog', function (req, res) {
  console.log('This is about/dog');
})

app.get('/about/:animal', function (req, res) {
  console.log('This is about/animal');
})

app.listen(8000, function (){
  console.log("Listening on 8000...");
})
