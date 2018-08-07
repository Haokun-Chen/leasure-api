const express = require('express');
const listings = require('../routes/listings');

module.exports = function(app) {
    app.use(express.json());
    app.use('/listings', listings);
}