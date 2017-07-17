var express = require('express');
var app = express();
var app = require('..model/app.js');
var bodyParser = require('body-parser');
var mainRouter = ('../routes/routes.js');
var mustacheExpress = require('mustache-express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/rocks');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/', mainRouter);



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', app);
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


var rocksSchema = new mongoose.Schema ({
  color: {type: String, required: true},
  shape: String,
  sizeInMM: {type: Number, required: true},
  rockType: {type: String, required: true},
  foundLocation: [{
    city: String,
    state: String}],
  foundDate: {type: Date, required: true},
});



model.exports = RockColletion;
module.exports = app;
