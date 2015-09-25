#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    fileExists = require('file-exists');

var tmp = null;
for (var i = 0; i < 100; i++) {
  tmp = path.join(process.cwd(), Math.random().toString(32).split('.')[1]);
  if (!fileExists(tmp)) {
    break;
  }
}

if (fileExists(tmp)) {
  console.log('make sure you have access rights to the current directory');
  process.exit();
}

fs.renameSync(process.argv[2], tmp);
fs.renameSync(process.argv[3], process.argv[2]);
fs.renameSync(tmp, process.argv[3]);
