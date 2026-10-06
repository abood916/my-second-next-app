const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            'message': 'Athentication token are required',
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("DECODED:", decoded);

        req.user = decoded.userId;

        next()
    } catch(error) {
        return res.status(401).json({
            'message': 'Invalid or expired token',
        });
    }
};

module.exports = authMiddleware