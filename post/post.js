var express = require('express');
var app = express();
fs = require('fs');


app.post('/', function (req, res) {
    
var response="";
fs.writeFile('helloworld.txt', 'hi', function (err) {
  if (err){ response=err;}
else{
  response ="write successful";
    }
  res.send(response);
  });
  
  })
  
  app.listen(3000, function () {
   console.log('Hey!! Server started at port 3000!');
   })
   
   exports.app=app;