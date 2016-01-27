#!/usr/bin/env node
var fs = require('fs');
var str = "";
var filepath = process.argv[2];

if (!filepath) {
  console.log("-- error: please provide a path");
  return;
}

var ws = fs.createWriteStream(__dirname + '/' + filepath);

process.stdin.on('readable', function(){
  var chunk = process.stdin.read();
  if (chunk) {
    // Check for the end command to terminate stdin stream
    if (chunk.toString().toLowerCase() === "end\n") {
      process.stdin.end();
    } else {
      ws.write(chunk);
    }
  }
});
