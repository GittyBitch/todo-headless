var express = require('express');
var router = express.Router();

var db = require('../db');

router.post('/', async function (req, res, next) {
	await db.TodoItem.update(
		req.body,
		{
			where: {
				id: req.body.id
			}
		}).then(() => {
			console.log('Record updated successfully');
			res.status(200).send("OK");
		}).catch((error) => {
			console.error('An error occurred:', error);
			res.status(404).send("NOT OK");
		});
});

module.exports = router;
