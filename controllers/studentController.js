const User = require('../models/User');
const Institute = require('../models/Institute');

exports.getStudentDashboard = async (req, res) => {
  try {
    const student = await User.findById(req.user.id).populate('institute_id', 'name address contact_info');
    if (!student) return res.status(404).json({ message: 'Student not found' });

    res.json({
      name: student.name,
      email: student.email,
      institute: student.institute_id,
      joinedAt: student.createdAt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};