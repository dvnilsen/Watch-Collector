const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
  
  const watchSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    style: {
        type: String,
        enum: ['Dress', 'Diver', 'Chronograph', 'Casual', 'Pilot/Field', 'GMT', 'Digital'],
        required: true
    },
    dialColor: {
        type: String,
        required: true
    },
    caseMaterial: {
        type: String,
        enum: ['Stainless Steel', 'PVD/DLC', 'Titanium', 'Bronze', 'Gold Tone', 'Other'],
        required: true
    },
    movement: {
        type: String,
        enum: ['Automatic', 'Quartz', 'Solar'],
        required: true
    },
    gender: {
        type: String,
        enum: ['Mens', 'Womens', 'All Gender'],
    },
    review: {
        type: String,
    },
     user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userName: String,
    userAvatar: String 
     
});
  
  module.exports = mongoose.model('Watch', watchSchema);