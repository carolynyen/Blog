var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var commonmark = require('commonmark');
var bodyparser = require('body-parser');

var index = require('./routes/index');
var blog = require('./routes/blog');
var login = require('./routes/login');
var api = require('./routes/api');
var jwt = require('jsonwebtoken');

var app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'BlogServer';

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  app.locals.db = client.db(dbName);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/editor*', function(req, res, next) {
    var token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', function(err, success) {
            if (err) {
                res.redirect('/login?redirect=/editor/');
                return;
            } else {
                next();
            }
        });
    } else {
        res.redirect('/login?redirect=/editor/');
        return;
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/blog', blog);
app.use('/login', login);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
