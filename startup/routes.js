const express = require('express');
const listings = require('../routes/listings');
const user = require('../routes/user');
const auth = require('../routes/auth');

module.exports = function(app) {
    app.use(express.json());
    app.use('/listings', listings);
    app.use('/user', user);
    app.use('/auth', auth);
}