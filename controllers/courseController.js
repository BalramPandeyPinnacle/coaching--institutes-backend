const mongoose = require('mongoose');
const Course = require('../models/Course');

// Add a course
exports.createCourse = async (req, res) => {
  const { title, description, type, fileURL } = req.body;
  try {
    const course = await Course.create({ title, description, type, fileURL });
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create course' });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};