const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).send("Unauthorized");
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, token) => {
            if(err){
                return res.send(403).send("Invalid token")
            }
            req.user = token.UserInfo.username;
            req.role = token.UserInfo.role;
            next();
        }
    );
}

module.exports = verifyJWT;