/* routes.js */

const express = require('express');
const router = express.Router();

var googleApiResults = require('./controllers/googleApiController');


router.post('/', googleApiResults.list_all);
module.exports = router;