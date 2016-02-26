var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;

router.post('/', function(req, res, next) {
  console.log('downloading ' + req.body.magnet);
  exec('transmission-remote -a "' + req.body.magnet + '"', function(error, stdout, stderr) {
    var output = "";
    if (error) {
      console.log('Error:' + error);
      output += error;
    }
    if (stderr) {
      console.log(stderr);
    }
    if (stdout) {
      console.log(stdout);
      if (stdout.indexOf('responded: "success"') > -1) {
        output = "It worked";
      } else {
        output += stdout;
      }
    }
    res.render('finished', {output : output});
  });
});

module.exports = router;
