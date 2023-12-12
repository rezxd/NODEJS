const http = require ('http');

const server = http.createServer( function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.write("<h1>Hi</h1>, selamat anda berhasil membuat server dengan <b>Node Js</b>");
    res.end()
})

server.listen(8000);
console.log("server running at port 8000");