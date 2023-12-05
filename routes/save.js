var express = require('express');
var router = express.Router();

var db = require('../db');

router.post('/', function(req, res, next) {
const item = db.TodoItem.create({
	  title: req.body.title,
	  description: req.body.description,
	  date: new Date(1983, 6, 8),
	  status: req.body.status
});
res.status(200).send("OK");
});

module.exports = router;
