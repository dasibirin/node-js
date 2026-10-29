// routes/courses.js
const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses');

// שימוש ב-Controller במקום בלוגיקה ישירה
router.get('/', coursesController.getAll);
router.post('/', coursesController.create);

module.exports = router;