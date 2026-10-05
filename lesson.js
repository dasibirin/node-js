// טעינת משתני הסביבה מקובץ .env — חייב להיות ראשון!
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ייבוא ה-Routers
const coursesRouter = require('./routes/courses');
// ב-lesson.js
const studentsRouter = require('./routes/students'); // שימי לב שזה Router ולא Controller

// ייבוא ה-Middleware של המפתח הסודי
const authMiddleware = require('./middlewares/auth');

// Middleware
app.use(express.json());

// חיבור ה-Routers לשרת
app.use('/courses', coursesRouter);
app.use('/students', authMiddleware, studentsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});