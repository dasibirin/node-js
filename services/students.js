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

const addStudent = (newStudentData) => {
    return create(newStudentData);
};

const getById = (id) => {
    return students.find(s => s.id === id);
};

module.exports = {
    getAll,
    create,
    addStudent,
    getById
};