const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  contact_info: String,
  description: String,
  founder: String,
  experience: String,
  rating: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  number_of_students: { type: Number, default: 0 },
  settings: Object,
}, { timestamps: true });

module.exports = mongoose.model('Institute', instituteSchema);