#!/usr/bin/env node
var http = require('http');
var fs = require('fs');

var url = process.argv[2];
var filename = process.argv[3];

if (!url || !filename) {
  console.log("-- error: must supply a URL and a filename as arguments.");
} else {
  var writeStream = fs.createWriteStream(__dirname + '/' + filename);
  http.get(url, function(response){
    response.pipe(writeStream);
  }).on('error', function(e){
    console.log('Uh oh! Got an error:' + e.message);
  });
}
