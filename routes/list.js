var express = require('express');
var router = express.Router();

var db = require('../db');
var status = require('./common');

router.get('/', async function (req, res, next) {
    //FIXME: error handling
    result = await db.TodoItem.findAll();
    status.successResponse(JSON.stringify(result), res); // TODO: result versus status
});

module.exports = router;
