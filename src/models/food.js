'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },	  username: { type: String, required: true },
  calories: { type: Number, required: true },	  title: { type: String },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN'] },
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
