
function respond(status, msg, res, error) {
    if(error)
        console.error(msg, error);
    else
        console.log(msg);

    //FIXME: JSON + error
    res.status(status).send( msg );
}

function errorResponse(msg, res, error) {
    respond(404, "An error occurred:" + msg, res, error);
}

function successResponse(msg, res) {
    respond(200, msg, res);
}

module.exports = {
    //respond:respond,
    errorResponse: errorResponse,
    successResponse: successResponse
}