// controllers/courses.js
const coursesService = require('../services/courses');

const getAll = async (req, res) => {
    try {
        const courses = await coursesService.getAllCourses();
        res.json(courses);
    } catch (err) {
        console.error('Error reading courses:', err);
        res.status(500).json({ message: 'Error reading courses', error: err.message });
    }
};

const create = async (req, res) => {
    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body) || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Request body must be a non-empty object' });
    }

    try {
        const newCourse = await coursesService.addCourse(req.body);
        res.status(201).json(newCourse);
    } catch (err) {
        console.error('Error creating course:', err);
        res.status(500).json({ message: 'Error creating course', error: err.message });
    }
};

module.exports = {
    getAll,
    create
};
