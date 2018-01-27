/* Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code! */




// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Giovanni is ok " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(7000, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + 7000);
});

server2.listen(7500, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + 7500);
  });
  