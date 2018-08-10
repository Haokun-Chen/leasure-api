const express = require('express');
const location = require('../routes/location');
const listings = require('../routes/listings');
const user = require('../routes/user');
const signin = require('../routes/signin');

module.exports = function(app) {
    app.use(express.json());
    app.use('/location', location);
    app.use('/listings', listings);
    app.use('/user', user);
    app.use('/signin', signin);
}