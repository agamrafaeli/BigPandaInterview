//Requirements
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var commentsApi = require('./routes/api');
var app = express();


// View setup
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// Allow cors
app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});
app.use(cors());
app.options('*', cors());

// Paths setup
app.use('/api/', commentsApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});




var server = app.listen(4000, function() {
var host = 'localhost';
var port = server.address().port;

console.log('App listening at http://%s:%s', host, port);
});
module.exports = app;