var http=require('http');
var dt=require('./myFirstmodule.js');

http.createServer(function(req, res){
                res.write("The date and time is "+dt.returnDate());
                  res.end("Hello World");
                  }).listen(8081);