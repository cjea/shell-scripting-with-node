#!/usr/bin/env node
var fs = require('fs');

// Create a new write stream at the desired location
var out = fs.createWriteStream(__dirname + '/new-file.txt');

// Grab all arguments from user input. Relevant arguments start at index 2
var args = process.argv.slice(2);
out.write("Hello," + process.env.USER + ". You wrote:\n" + args.join(" ") + "\n");

// Close the stream
out.end();
