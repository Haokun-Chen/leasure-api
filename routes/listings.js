const { Listing, validate } = require('../models/listing'); 
const validateObjectId = require('../middleware/validateObjectId');

const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const url = require('url');

// get all listings filter with location, availability
router.get('/', async (req, res) => {
    console.log(url.parse(req.url, true).query);

    const listings = await Listing.find().sort('title');
    res.send(listings);
});

// validate authentication for posting new listing
router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const listing = new Listing({ 
      title: req.body.title,
      bathType: req.body.bathType,
    });
    await listing.save();
    
    res.send(listing);
});

// specific listing page, middleware to validate request params _id
router.get('/:id', validateObjectId, async (req, res) => {
    const listing = await Listing.findById(req.params.id);
  
    if (!listing) return res.status(404).send('The listing with the given ID was not found.');
  
    res.send(listing);
});

module.exports = router; 