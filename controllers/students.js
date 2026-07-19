// controllers/students.js
const studentsService = require('../services/students');

const getAllStudents = (req, res) => {
    const students = studentsService.getAll();
    res.json(students);
};

const createStudent = (req, res) => {
    const newStudent = studentsService.create(req.body);
    res.json(newStudent);
};

module.exports = { getAllStudents, createStudent };