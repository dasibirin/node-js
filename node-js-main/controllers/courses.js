// controllers/courses.js
const coursesService = require('../services/courses');

const getAll = async (req, res) => {
    try {
        const courses = await coursesService.getAllCourses();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error reading courses', error: err.message });
    }
};

const create = async (req, res) => {
    try {
        const newCourse = await coursesService.addCourse(req.body);
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ message: 'Error creating course', error: err.message });
    }
};

module.exports = {
    getAll,
    create
};
