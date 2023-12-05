var express = require('express');
var router = express.Router();

var db = require('../db');

router.post('/', function(req, res, next) {
db.TodoItem.destroy({
where: {
	id: req.body.id 
}
}).then(() => {
	console.log('Record deleted successfully');
	res.status(200).send("OK");
}).catch((error) => {
	console.error('An error occurred:', error);
	res.status(404).send("NOT OK");
});

});

module.exports = router;
