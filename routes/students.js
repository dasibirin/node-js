// routes/students.js
const studentsController = require('../controllers/students');
const express = require('express');
const router = express.Router();


router.get('/', studentsController.getAllStudents);
router.post('/', studentsController.createStudent);
router.get('/:id', studentsController.getStudentById);
module.exports = router;