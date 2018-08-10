const Joi = require('joi');
const mongoose = require('mongoose');

// define a model with Schema to describe a document in the Mongodb collection 
const Location = mongoose.model('Location', new mongoose.Schema({
    state: {
      type: String,
      required: true,
      trim: true, 
      enum : ['NC']
    },
    city: { 
      type: String, 
      required: true,
      trim: true, 
      enum : ['Chapel Hill', 'Durham']
    },
  }));

function validateLocation(location) {
    const schema = {
      state: Joi.string().valid('NC').required(),
      city: Joi.string().valid('Chapel Hill', 'Durham').required(),
    };
    return Joi.validate(location, schema);
}

  exports.Location = Location;
  exports.validate = validateLocation;