var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDefs');
const { engine } = require('express-handlebars');

const options = {
  swaggerDefinition,
  apis: swaggerDefinition.apis, // from the exported definition file
};

// Generate Swagger specification from the JSDoc comments
const swaggerSpec = swaggerJSDoc(options);

var indexRouter = require('./routes/index');
var saveRouter = require('./routes/save');
var listRouter = require('./routes/list');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');

var app = express();
app.use(express.json())

// view engine setup
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

var db = require('./db.js');

try {
  db.sequelize.authenticate();
  db.syncDatabase();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Serve Bootstrap CSS and JS from node_modules
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', indexRouter);
app.use('/save', saveRouter);
app.use('/list', listRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
