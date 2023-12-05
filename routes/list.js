var express = require('express');
var router = express.Router();

var db = require('../db');

router.post('/', async function(req, res, next) {
/*
const item = db.TodoItem.create({
	  name: req.body.name,
	  description: req.body.description,
	  date: new Date(1983, 6, 8),
	  itemStatus:req.body.status
});
*/
result=await db.TodoItem.findAll();
console.log(result);
res.status(200).send(JSON.stringify(result));
});

module.exports = router;
