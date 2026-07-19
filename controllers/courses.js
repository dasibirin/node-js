// controllers/courses.js
const coursesService = require('../services/courses');

const getAll = (req, res) => {
    res.json(coursesService.getAllCourses());
};

const create = (req, res) => {
    const newCourse = coursesService.addCourse(req.body);
    res.json(newCourse);
};

module.exports = {
    getAll,
    create
};
