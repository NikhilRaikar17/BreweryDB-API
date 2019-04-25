var express = require('express');
var router = express.Router();
var request = require('request');
var API_Key = `36a9fd1572ee14caebcaf7834eda6905`

/* GET home page. */
router.get('/details/:id', function(req, res, next) {
  request({
  uri: `https://sandbox-api.brewerydb.com/v2/beer/`+req.params.id+`?key=${API_Key}`,
}).pipe(res);
});

module.exports = router;
