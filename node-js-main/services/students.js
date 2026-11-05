// services/students.js
const students = require('../data/students');

const getAll = async () => {
    return students;
};

const create = async (newStudentData) => {
    const newStudent = { id: students.length + 1, ...newStudentData };
    students.push(newStudent);
    return newStudent;
};

const addStudent = async (newStudentData) => {
    return create(newStudentData);
};

const getById = async (id) => {
    return students.find(s => s.id === id);
};

module.exports = {
    getAll,
    create,
    addStudent,
    getById
};