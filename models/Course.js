const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: { type: String, enum: ['video', 'test', 'ebook'] },
  fileURL: String
});

module.exports = mongoose.model('Course', courseSchema);
