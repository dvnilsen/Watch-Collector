const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

/* 
const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  */ 
  
  const watchSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    style: {
        type: String,
        required: true
    }
});
  
  module.exports = mongoose.model('Watch', watchSchema);