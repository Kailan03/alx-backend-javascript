const http = require('http');
const countStudents = require('./3-read_file_async');
const url = require('url');

// Create the HTTP server
const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (parsedUrl.pathname === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Extract the database path from the query or arguments
        const database = process.argv[2];

        if (database) {
            res.write('This is the list of our students\n');
            countStudents(database)
                .then(() => {
                    res.end();  // End the response once the file is processed
                })
                .catch((error) => {
                    res.write(error.message);
                    res.end();
                });
        } else {
            res.write('This is the list of our students\n');
            res.write('Cannot load the database');
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app to allow it to be used in other files or for testing
module.exports = app;
