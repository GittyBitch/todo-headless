var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');


router.post('/', async function (req, res, next) {
	const item = await db.TodoItem.create({
		title: req.body.title,
		description: req.body.description,
		date: new Date(1983, 6, 8),
		status: req.body.status
	});
	// FIXME: Error handling and return id of new item
	status.successResponse("success", res);
});

module.exports = router;
