const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instituteRoutes = require('./routes/instituteRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/institutes', instituteRoutes);
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));