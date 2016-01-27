#!/usr/bin/env node
var fs = require('fs');
var str = "";
var filepath = process.argv[2];

if (!filepath) {
  console.log("-- error: please provide a path");
  return;
}

// Initialize write stream
var ws = fs.createWriteStream(__dirname + '/' + filepath);

/* 
  Standard input will emit a 'readable' event when it has data to read
  and adding this listener puts the terminal into interactive mode
*/
process.stdin.on('readable', function(){
  
  // Read the data the user gives
  var chunk = process.stdin.read();
  
  // Guard against null chunk (calling toSting().toLowerCase() on null will break the program 
  if (chunk) {
    // Check for the end command to terminate stdin stream
    if (chunk.toString().toLowerCase() === "end\n") {
      process.stdin.end();
    } else {
      ws.write(chunk);
    }
  }
});
