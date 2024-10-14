const http = require('http'); // Import Node.js core module

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log('Request received');
    console.log(req);
    console.log(res);

    // send a hello world response
    res.write('Hello world'); // write a response to the client

    res.end(); // end the response
});

// start your server
server.listen(PORT, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:", PORT);
});