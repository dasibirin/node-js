// middlewares/auth.js
const authMiddleware = (req, res, next) => {
    const secret = req.headers['x-secret-key'];

    if (!secret || secret !== process.env.SECRET_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
};

module.exports = authMiddleware;
