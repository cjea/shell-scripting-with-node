#!/usr/bin/env node
var fs = require('fs');
var out = fs.createWriteStream(__dirname + '/new-file.txt');
var arg = process.argv[2];
out.write("Hello," + process.env.USER + ". You wrote:\n" + process.argv.slice(2).join(" ") + "\n");
out.end();
