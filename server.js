const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("this is the end")
});

server.listen(process.env.PORT || 3000);