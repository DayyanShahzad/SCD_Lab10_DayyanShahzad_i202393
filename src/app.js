const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
