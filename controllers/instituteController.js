const Institute = require('../models/Institute');

exports.createInstitute = async (req, res) => {
  const { name, address, contact_info, description, founder, experience, rating, status } = req.body;
  try {
    const institute = await Institute.create({
      name,
      address,
      contact_info,
      description,
      founder,
      experience,
      rating,
      status
    });
    res.status(201).json(institute);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create institute' });
  }
};

exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.find();
    res.json(institutes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch institutes' });
  }
};
