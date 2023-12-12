const http = require ('http');

const server = http.createServer( function(req, res){
    res.write("<h1>Hi</h1>, selamat anda berhasil membuat server dengan <b>Node Js</b>");
})

server.listen(8000);
console.log("server running at port 8000");