var express = require('express');
var router = express.Router();

var db = require('../db');

router.post('/', async function (req, res, next) {
    result = await db.TodoItem.findAll();
    console.log(result);
    res.status(200).send(JSON.stringify(result));
});

module.exports = router;
s