const http = require('http');

const server = http.createServer((req, res)=>{
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write('<h1>Hello world</h1>')
   res.end()
})
PORT = 5002;
 
server.listen(PORT, ()=> console.log(`server is running at ${PORT}` ));
