#!/usr/bin/env node

// http module for sending out our GET request
var http = require('http');
var fs = require('fs');

var url = process.argv[2];
var filename = process.argv[3];

// Standard error handling, in case we forget to put in one of our args
if (!url || !filename) {
  console.log("-- error: must supply a URL and a filename as arguments.");
} else {
  // Initialize write stream to desired file location
  var writeStream = fs.createWriteStream(__dirname + '/' + filename);
  http.get(url, function(response){
    // Response stream from GET request is piped directly into write stream declared above
    response.pipe(writeStream);
  }).on('error', function(e){
    console.log('Uh oh! Got an error:' + e.message);
  });
}
