var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');

router.post('/', async function (req, res, next) {
    //FIXME: error handling
    result = await db.TodoItem.findAll();
    status.successResponse(JSON.stringify(result), res);
});

module.exports = router;
