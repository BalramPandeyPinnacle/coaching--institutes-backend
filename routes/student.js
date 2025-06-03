const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getStudentDashboard } = require('../controllers/studentController');

router.get('/dashboard', authMiddleware, getStudentDashboard);
