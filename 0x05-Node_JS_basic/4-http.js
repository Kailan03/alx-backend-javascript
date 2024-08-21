const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the response header to indicate plain text
    res.setHeader('Content-Type', 'text/plain');
    
    // Send the response body
    res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app to allow it to be used in other files or for testing
module.exports = app;
