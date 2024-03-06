const jwt = require('jsonwebtoken');
const StatusCodes = require('http-status-codes');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
    const validLength = 2;
    const { authorization } = req.headers;

    if (!authorization) return res.status(StatusCodes.UNAUTHORIZED).send({ error: "You are not authenticated!" });

    const parts = authorization.split(' ');

    if (!parts === validLength) return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Token error." });

   const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Token malformatted!" });
    
    jwt.verify(token, process.env.JWT, (err, decoded) => {
        if (err) return res.status(StatusCodes.UNAUTHORIZED).send({ error: "Token is not valid!" });

        req.userId = decoded.id;
        return next();
    });

};

module.exports = verifyToken;
