var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');


router.post('/', async function (req, res, next) {
	await db.TodoItem.update(
		req.body,
		{
			where: {
				id: req.body.id
			}
		}).then(() => {
			status.successResponse({status:'Record updated successfully'}, res);
		}).catch((error) => 
		{
			status.errorResponse({status:'Record NOT updated successfully'}, res, error);	
		});
});

module.exports = router;
