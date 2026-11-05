// controllers/students.js
const studentsService = require('../services/students');

const getAllStudents = async (req, res) => {
    try {
        const students = await studentsService.getAll();
        res.json(students);
    } catch (err) {
        console.error('Error reading students:', err);
        res.status(500).json({ message: 'Error reading students', error: err.message });
    }
};

const createStudent = async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await studentsService.addStudent(newStudent);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error creating student:', err);
        res.status(500).json({ message: 'Error creating student', error: err.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const studentId = parseInt(req.params.id);

        if (isNaN(studentId)) {
            return res.status(400).send('Invalid ID format');
        }

        const student = await studentsService.getById(studentId);

        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    } catch (err) {
        console.error('Error reading student:', err);
        res.status(500).json({ message: 'Error reading student', error: err.message });
    }
};

module.exports = { getAllStudents, getStudentById, createStudent };
