var static = require("node-static");

var file = new static.Server("../build", {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type"
  }
});

require("http")
  .createServer(function(request, response) {
    request
      .addListener("end", function() {
        //
        // Serve files!
        //
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8500);
