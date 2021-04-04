const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression())

app.use(cors({
    origin:["http://www.grupoaquimaisvalor.com.br","http://127.0.0.1:5500"]
}));
app.options(" *",cors());
app.use('/', usersRouter);

module.exports = app;
