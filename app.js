var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var config = require('./config');
//var ObjectID = mongodb.ObjectID;

dbURI = config.mongoUrl;

if (process.env.VCAP_SERVICES) {
  var env = JSON.parse(process.env.VCAP_SERVICES);
  if (env.mongolab) { // for mongolabs
    var ml = env.mongolab;
    dbURI = ml[0].credentials.uri;
  }
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});
db.on('connected', function() {
    console.log('connected!');
});
db.on('reconnected', function () {
    console.log('reconnected');
});
db.on('disconnected', function() {
    console.log('disconnected');
    console.log('dbURI is: '+dbURI);
    mongoose.connect(dbURI, {server:{auto_reconnect:true, socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }}, replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }});
  });

console.log('dbURI is: '+dbURI);

mongoose.connect(dbURI, {server:{auto_reconnect:true}});



/* Connect to server
var url = 'mongodb://remy:remypassword@ds135382.mlab.com:35382/heroku_zp2jpnn2';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});*/


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


var app = express();

app.use(cors());

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

// CORS
app.use(function (req, res, next) {

    //headers that enable corse
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
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
