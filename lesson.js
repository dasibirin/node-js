const express = require('express');
const app = express();
const PORT = 3000;

// ייבוא ה-Routers
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');

// Middleware
app.use(express.json());

// חיבור ה-Routers לשרת
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});