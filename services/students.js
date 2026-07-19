// services/students.js
const students = require('../data/students');

const getAll = () => {
    return students;
};

const create = (newStudentData) => {
    const newStudent = { id: students.length + 1, ...newStudentData };
    students.push(newStudent);
    return newStudent;
};

module.exports = { getAll, create };