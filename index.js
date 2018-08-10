const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();
// checking if the app get get jwt private key from ENV
const config = require('./startup/config');
config.checkjwtKey();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;