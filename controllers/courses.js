// controllers/courses.js
const coursesService = require('../services/courses');

const getAll = (req, res) => {
    coursesService.getAllCourses()
        .then((courses) => res.json(courses))
        .catch(() => res.status(500).json({ message: 'Error reading courses' }));
};

const create = (req, res) => {
    coursesService.addCourse(req.body)
        .then((newCourse) => res.status(201).json(newCourse))
        .catch(() => res.status(500).json({ message: 'Error creating course' }));
};

module.exports = {
    getAll,
    create
};
