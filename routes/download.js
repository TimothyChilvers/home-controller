var express = require('express');
var router = express.Router();
var shell = require('thepiratebay');
var exec = require('child_process').exec;
var cmd = 'prince -v builds/pdf/book.html -o builds/pdf/book.pdf';


router.get('/', function(req, res, next) {
  console.log('downloading ' + tpb);
  exec(cmd, function(error, stdout, stderr) {
    if (error) {
      console.log('Error:' + error);
    }
    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.log(stderr);
    }
  });
});

module.exports = router;
