const express = require('express');
const studentRouter = require('./Routes/studentRoutes');

const app = express();

// 1) middleware
// 1.1) custom middleware/ GLOBAL MIDDLEWARE

//body-parser, reading data from the body into req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' })); //set body limit 10kb

//express does not support body on the req so we use middleware
//serving static file
app.use(express.static(`${__dirname}/public`));

//2) ROUTES
//always use mounting after the declare the variable ⬇️

app.use('/api/v1/student', studentRouter);

module.exports = app;
