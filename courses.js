const express = require('express');
const router = express.Router();

// המערך של הקורסים עובר לכאן
let courses = [{ id: 1, name: "Node.js Basics" }];

router.get('/', (req, res) => res.json(courses));

router.post('/', (req, res) => {
    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.json(newCourse);
});

module.exports = router;