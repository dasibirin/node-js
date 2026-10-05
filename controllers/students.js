// controllers/students.js
const studentsService = require('../services/students');

const getAllStudents = (req, res) => {
    const students = studentsService.getAll();
    res.json(students);
};

const createStudent = (req, res) => {
    const newStudent = req.body;
    const result = studentsService.addStudent(newStudent);
    res.status(201).json(result);
};

const getStudentById = (req, res) => {
    const studentId = parseInt(req.params.id);

    if (isNaN(studentId)) {
        return res.status(400).send('Invalid ID format');
    }

    const student = studentsService.getById(studentId);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
};

module.exports = { getAllStudents, getStudentById, createStudent };