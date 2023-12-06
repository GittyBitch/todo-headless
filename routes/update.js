var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');


router.put('/', async function (req, res, next) {
	await db.TodoItem.update(
		req.body,
		{
			where: {
				id: req.body.id
			}
		}).then(() => {
			status.successResponse('Record updated successfully', res);
		}).catch((error) => 
		{
			status.errorResponse('Record NOT updated successfully', res, error);	
		});
});

module.exports = router;
