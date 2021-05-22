const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect(
process.env.DB_URL_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
},
function (err){
    if (err){
        console.log("connection with databse is failed",err);
    }
    else{
        console.log("connection to database is completed");
    }
}

);
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const groceryListRouter = require('./routes/groceryList');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grocery', groceryListRouter);

module.exports = app;
