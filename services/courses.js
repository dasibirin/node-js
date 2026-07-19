const courses = require('../data/courses');

const getAllCourses = () => {
    return courses;
};

const addCourse = (newCourseData) => {
    const newCourse = { id: courses.length + 1, ...newCourseData };
    courses.push(newCourse);
    return newCourse;
};

module.exports = {
    getAllCourses,
    addCourse
};