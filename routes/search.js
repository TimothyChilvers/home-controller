var express = require('express');
var router = express.Router();
var tpb = require('thepiratebay');

router.get('/', function(req, res, next) {
  console.log('searching ' + tpb);
  if (req.query.q) {
    tpb.search(req.query.q, {}, function (err, searchResult) {
      console.log(searchResult);
      res.render('searchresults', { results: searchResult,
                              query : req.query.q,
                              downloadURL : process.env.HOST_URL + "/download"
                            });
    })
  } else {
    res.render('search');
  }


});

module.exports = router;
