const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bandSchema = new Schema({
    material: {
        type: String,
        enum: ["Nylon", "Leather", "Canvas", "Rubber", "Stainless Steel", "Gold Tone", "Other"],
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Band", bandSchema);