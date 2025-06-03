const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['superadmin', 'admin', 'teacher', 'student'], default: 'student' },
  institute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);