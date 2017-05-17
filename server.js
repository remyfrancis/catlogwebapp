var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
//var users = require('./routes/users');
var anchoringRouter = require('./routes/anchoringRouter');
var boathardwareRouter = require('./routes/boathardwareRouter');
var boatsandmotorsRouter = require('./routes/boatsandmotorsRouter');
var clothingRouter = require('./routes/clothingRouter');
var divingRouter = require('./routes/divingRouter');
var electricalRouter = require('./routes/electricalRouter');
var electronicRouter = require('./routes/electronicRouter');
var fishingRouter = require('./routes/fishingRouter');
var guidesRouter = require('./routes/guidesRouter');
var interiorRouter = require('./routes/interiorRouter');
var maintenanceRouter = require('./routes/maintenanceRouter');
var plumbingRouter = require('./routes/plumbingRouter');
var riggingRouter = require('./routes/riggingRouter');
var safetyRouter = require('./routes/safetyRouter');


var mongoose = require('mongoose');

var ObjectID = mongodb.ObjectID;
var ITEM_COLLECTION = "items";

const express = require('express');
const app = express();

app.use(cors());

/*app.listen(3000, function() {
  console.log('listening on 3000')
})*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log(__dirname);
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Create a database variable outside of the database connection callback to reuse the connection pool in the app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);

app.use('/', index);
//app.use('/users', users);
app.use('/anchoring',anchoringRouter);
app.use('/boathardware',boathardwareRouter);
app.use('/boatsandmotors',boatsandmotorsRouter);
app.use('/clothing',clothingRouter);
app.use('/diving',divingRouter);
app.use('/electrical',electricalRouter);
app.use('/electronic',electronicRouter);
app.use('/fishing',fishingRouter);
app.use('/guides',guidesRouter);
app.use('/interior',interiorRouter);
app.use('/maintenance',maintenanceRouter);
app.use('/plumbing',plumbingRouter);
app.use('/rigging',riggingRouter);
app.use('/safety',safetyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// CORS
app.use(function (req, res, next) {

    //headers that enable corse
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
