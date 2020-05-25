const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is must for organisation'],
    unique: true,
    trim: true,
    maxlength: [
      150,
      'Number of characters should be less than or equal to 150',
    ],
    minlength: [
      20,
      'Organisation name should have more than 20 chaaracters in name',
    ],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A school must have a cover image'],
  },
  images: [String],
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
