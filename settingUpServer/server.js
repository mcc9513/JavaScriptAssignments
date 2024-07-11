const http = require('http'); // Import the http module from Node.js

// Create an HTTP server
const server = http.createServer((req, res) => { // The callback function handles incoming requests and sends responses
  if (req.method === 'GET' && req.url === '/') { // Check if the request method is GET and the URL is '/'
    res.statusCode = 200; // Set the HTTP status code to 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Set the Content-Type header to 'text/html'
    res.end('Hello World'); // Send the response body 'Hello World' and end the response
  } else if (req.method === 'GET' && req.url === '/api') { // Check if the request method is GET and the URL is '/api'
    res.statusCode = 200; // Set the HTTP status code to 200 (OK)
    res.setHeader('Content-Type', 'application/json'); // Set the Content-Type header to 'application/json'
    res.end(JSON.stringify({ message: 'Hello, welcome to our API!' })); // Send the JSON response and 
  } else { 
    res.statusCode = 404; // Set the HTTP status code to 404 (Not Found)
    res.setHeader('Content-Type', 'text/plain'); // Set the Content-Type header to 'text/plain'
    res.end('Error: Page Not Found'); // Send the response body 'Error: Page Not Found' and end the response
  }
});

const PORT = 3000; // Define the port number to listen on
server.listen(PORT, () => { // Start the server and listen on the specified port
  console.log(`Server running at http://localhost:${PORT}/`); // Log a message to the console when the server starts successfully
});
