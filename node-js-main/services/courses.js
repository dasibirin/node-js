const dataCourses = require('../data/courses');

const getAllCourses = async () => {
    return dataCourses.getCourses();
};

const addCourse = async (newCourseData) => {
    const courses = await dataCourses.getCourses();
    const newCourse = {
        id: courses.length + 1,
        ...newCourseData
    };

    courses.push(newCourse);
    await dataCourses.saveCourses(courses);
    return newCourse;
};

module.exports = {
    getAllCourses,
    addCourse
};