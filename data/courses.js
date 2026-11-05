const fs = require('fs/promises');
const path = require('path');

const coursesFilePath = path.join(__dirname, 'courses.json');

async function getCourses() {
    const data = await fs.readFile(coursesFilePath, 'utf8');
    return data.trim() ? JSON.parse(data) : [];
}

async function saveCourses(courses) {
    await fs.writeFile(coursesFilePath, JSON.stringify(courses, null, 2));
}

module.exports = {
    getCourses,
    saveCourses
};
