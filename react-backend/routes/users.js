var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/details/:id', function(req, res, next) {
  request({
  uri: 'https://sandbox-api.brewerydb.com/v2/beer/'+req.params.id+'?key=36a9fd1572ee14caebcaf7834eda6905',
}).pipe(res);
});

module.exports = router;
