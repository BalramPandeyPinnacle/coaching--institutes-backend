const accessLogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  timestamp: Date,
  activity_type: String
});
module.exports = mongoose.model('AccessLog', accessLogSchema);