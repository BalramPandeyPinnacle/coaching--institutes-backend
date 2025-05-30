const instituteSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact_info: String,
  settings: Object
});
module.exports = mongoose.model('Institute', instituteSchema);