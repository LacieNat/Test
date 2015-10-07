var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kit/:name', function(req, res, next) {
	var name = req.params.name;
	res.render(name);
});

router.get('/kitPopulator/:name', function(req, res, next) {
	
});

router.get('/example', function (req, res) {
  res.status(404).send("SORRY");
});

module.exports = router;
