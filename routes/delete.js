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
		status.successResponse('Record deleted successfully', res);
	}).catch((error) => {
		status.errorResponse('Problem deleting entry', res, error)
	});

});

module.exports = router;
