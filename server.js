const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instituteRoutes = require('./routes/instituteRoutes');
const userRoutes = require('./routes/userRoutes');
// const studentRoutes = require('./routes/student');
const User = require('./models/User');
const Institute = require('./models/Institute');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/institutes', instituteRoutes);
app.use('/api/users', userRoutes);
app.post('/api/student/dashboard', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email }).select('-password').populate('institute_id');

    if (!user) {
      return res.status(404).json({ message: 'Student not found' });
    }

    if (user.role !== 'student') {
      return res.status(403).json({ message: 'Access denied: Not a student' });
    }

    res.json({
      name: user.name,
      email: user.email,
      role: user.role,
      institute: user.institute_id?.name || 'No Institute Assigned',
      joinedAt: user.createdAt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});


// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const courseRoutes = require('./routes/courseRoutes');
// const instituteRoutes = require('./routes/instituteRoutes');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// dotenv.config();
// connectDB();
// app.use(express.json());
// app.use('/api/auth', authRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/institutes', instituteRoutes);
// app.use('/api/users', userRoutes);

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));