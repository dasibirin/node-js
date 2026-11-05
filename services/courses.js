const dataCourses = require('../data/courses');

// תור פשוט — מונע מצב שבו שתי בקשות במקביל מקבלות אותו id
let writeQueue = Promise.resolve();

const getAllCourses = async () => {
    return dataCourses.getCourses();
};

const addCourse = (newCourseData) => {
    const task = writeQueue.then(async () => {
        const courses = await dataCourses.getCourses();

        // id = מקסימום קיים + 1, לא length + 1 (מונע כפילויות אחרי מחיקות)
        const nextId = courses.reduce((max, c) => Math.max(max, Number(c.id) || 0), 0) + 1;
        const newCourse = { ...newCourseData, id: nextId };

        courses.push(newCourse);
        await dataCourses.saveCourses(courses);
        return newCourse;
    });

    // גם אם הכתיבה נכשלה, התור ממשיך לעבוד
    writeQueue = task.catch(() => {});
    return task;
};

module.exports = {
    getAllCourses,
    addCourse
};
