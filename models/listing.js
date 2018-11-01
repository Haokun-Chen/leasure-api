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
    rooms: {
      type: Number,
      required: true,
      min: 1
    },
    baths: {
      type: Number,
      required: true,
      min: 0
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
    description: {
        type: String, 
        required: true,
        minlength: 50
    },
    geolocation: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    // latitude: {
    //     type: Number,
    //     required: true,
    //     min: -90,
    //     max: 90
    // },
    // longitude: {
    //   type: Number,
    //   required: true,
    //   min: -180,
    //   max: 180
    // },
    // address: {
    //     type: String, 
    //     required: true,
    // },
    rent: {
        type: Number, 
        required: true,
        min: 0,
    },
    // utilities: {
    //     type: Number, 
    //     required: true,
    //     min: 0,
    // },
    moveInDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    moveOutDate: {
        type: Date,
        required: true,
    },
    // amentities: {

    // },
    // tags: {
    //     type: [String],
    // }
  }));

  function validateListing(listing) {
    const schema = {
      title: Joi.string().min(5).max(255).required(),
      rooms: Joi.number().min(1).required(),
      baths: Joi.number().min(0).required(),
      bathType: Joi.string().valid('private', 'shared').required(),
      description: Joi.string().min(50).required(),
      rent: Joi.number().min(0).required(),
      moveInDate: Joi.date().required(),
      moveOutDate: Joi.date().required(),
      geolocation: Joi.object().keys({
        type: Joi.string().valid('Point').required(),
        coordinates: Joi.array().ordered(Joi.number().min(-180).max(180).required(), Joi.number().min(-90).max(90).required()).required()
      }).required()
    };
  
    return Joi.validate(listing, schema);
  }

  exports.Listing = Listing;
  exports.validate = validateListing;