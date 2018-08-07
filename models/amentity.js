const Joi = require('joi');
const mongoose = require('mongoose');

const amentitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['furnished','free parking', '']
  }
});

const Amentity = mongoose.model('Genre', amentitySchema);

function validateAmentity(amentity) {
    const schema = {
      name: Joi.string().min(5).max(50).required()
    };
  
    return Joi.validate(genre, schema);
  }
  
exports.amentitySchema = amentitySchema;
exports.Amentity = Amentity; 
exports.validate = validateAmentity;