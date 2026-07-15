const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// נתונים (בהמשך נפריד לקבצים)
let students = [{ id: 1, name: "Israel" }];
let enrollments = []; // נדרש במשימה: ישות רישום

// מחברים את ה-Routes של הקורסים שביקשת להפריד
app.use('/courses', require('./courses'));

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