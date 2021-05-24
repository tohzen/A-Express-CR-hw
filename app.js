const express = require('express');

const logger = require('morgan');
const path = require('path')
const indexRouter = require('./router/indexRouter')
const todoRouter = require('./router/gameRouter')

const app = express()



app.use(express.json())

app.use('/', indexRouter)
app.use('/api/todo', todoRouter)



// app.listen(3000, function () {
//     console.log(`Server is now running on port 3000`);
//   });

  module.exports = app;