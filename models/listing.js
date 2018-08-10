const Joi = require('joi');
const mongoose = require('mongoose');

// define a model with Schema to describe a document in the  Mongodb collection 
const Listing = mongoose.model('Listings', new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    bathType: { 
      type: String, 
      required: true,
      enum : ['shared', 'private']
    },
    // renterGender: { 
    //   type: String, 
    //   required: true,
    //   enum : ['male', 'female', 'anyone']
    // },
    // description: {
    //     type: String, 
    //     required: true,
    // },
    // area: {
    //     type: String,
    //     required: true,
    //     enum: ['Chapel Hill', 'Durham', 'Raleigh']
    // },
    // address: {
    //     type: String, 
    //     required: true,
    // },
    // rent: {
    //     type: Number, 
    //     required: true,
    //     min: 0,
    // },
    // utilities: {
    //     type: Number, 
    //     required: true,
    //     min: 0,
    // },
    // moveInDate: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // },
    // moveOutDate: {
    //     type: Date,
    //     required: true,
    // },
    // amentities: {

    // },
    // tags: {
    //     type: [String],
    // }
  }));

  function validateListing(listing) {
    const schema = {
      title: Joi.string().min(5).max(255).required(),
      bathType: Joi.string().valid('private', 'shared').required(),
    };
  
    return Joi.validate(listing, schema);
  }

  exports.Listing = Listing;
  exports.validate = validateListing;