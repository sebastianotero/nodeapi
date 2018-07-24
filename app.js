/* app.js */

// load app dependencies
const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./routes');

const app = express();
const port = process.env.NODE_ENV || 3000;

// app configurations
app.set('port', port);

// load app middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// load API routes
app.use('/', Routes);

// middleware for when the wrong route is entered
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

// establish http server connection
app.listen(port, () => { console.log(`App running on port ${port}`) });

