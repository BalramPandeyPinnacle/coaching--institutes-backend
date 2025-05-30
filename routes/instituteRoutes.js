const express = require('express');
const router = express.Router();
const { createInstitute, getInstitutes } = require('../controllers/instituteController');

router.post('/', createInstitute); // ✅ Function must exist
router.get('/', getInstitutes);    // ✅ Ensure this exists too

module.exports = router;
