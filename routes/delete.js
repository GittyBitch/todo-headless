var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');

router.post('/', async function (req, res, next) {
	await db.TodoItem.destroy({
		where: {
			id: req.body.id
		}
	}).then(() => {
		status.successResponse({status:'Record deleted successfully'}, res);
	}).catch((error) => {
		status.errorResponse({status:'Problem deleting entry'}, res, error)
	});

});

module.exports = router;
