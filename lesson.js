const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// נתונים (בהמשך נפריד לקבצים)
let courses = [{ id: 1, name: "Node.js Basics" }];
let students = [{ id: 1, name: "Israel" }];
let enrollments = []; // נדרש במשימה: ישות רישום

// --- Routes עבור קורסים ---
app.get('/courses', (req, res) => res.json(courses));
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    course ? res.json(course) : res.status(404).json({ message: "Not found" });
});
app.post('/courses', (req, res) => {
    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.json(newCourse);
});

// --- Routes עבור תלמידים ---
app.get('/students', (req, res) => res.json(students));
app.post('/students', (req, res) => {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.json(newStudent);
});

// --- Routes עבור רישום (Enrollment) - נדרש במשימה ---
app.post('/enrollments', (req, res) => {
    const { studentId, courseId } = req.body;
    const newEnrollment = { id: enrollments.length + 1, studentId, courseId };
    enrollments.push(newEnrollment);
    res.json(newEnrollment);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});