const http = require('http'); // Import Node.js core module

const PORT = 3000;

const server = http.createServer((req, res) => {
    
    res.write('Hello world'); // write a response to the client

    res.end(); // end the response
});

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:", PORT)
});