#!/usr/bin/env node
console.log(process.argv);

/*
  Line 1 tells our machine to execute this file using node.
  The process variable on line 2 is exposed as a global variable in node, 
  and it gives us access to important information from our machine, including
  standard input/output/error streams, $USER, $PATH, argv, and much more.
  The argv property of the process object contains an array of command line 
  arguments. The first argument will be 'node', the second will be
  the name of the Javascript file we're working with, and the remaining args 
  will be those that the user put in. Access those args with process.argv.slice(2)
*/
