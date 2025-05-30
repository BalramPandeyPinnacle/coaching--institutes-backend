const subscriptionSchema = new mongoose.Schema({
  institute_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute' },
  course_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  startDate: Date,
  endDate: Date
});
module.exports = mongoose.model('Subscription', subscriptionSchema);