const { Location, validate } = require('../models/location'); 

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// get all locations
router.get('/', async (req, res) => {
    const locations = await Location.find();
    res.send(locations);
});

// add a location to the app
// router.post('/', async (req, res) => {
//     const { error } = validate(req.body); 
//     if (error) return res.status(400).send(error.details[0].message);
  
//     const location = new Location({ 
//       state: req.body.state,
//       city: req.body.city,
//     });
//     await location.save();
    
//     res.send(location);
// });

module.exports = router; 