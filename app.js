console.log("Automation Ninja")
var a=2
var b=3
var c=a+b

var http = require('http')

console.log("the output is = "+c)
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'test/html'})
    res.write("welcome back aliens..!!!")
    res.end("welcome back aliens..!!!")
    res.end() 
}).listen(8080)