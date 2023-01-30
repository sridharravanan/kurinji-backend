/**
 * Created by sridhar on 16/3/21.
 */
const jwt = require('jsonwebtoken');
require('dotenv/config');
const {JWT_SECRET_KEY} = process.env;
const authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token,"token", JWT_SECRET_KEY)
        jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).send({ success: false,
                    message: "Unauthenticate"});
            }
            next();
        });
    } else {
        return  res.status(400).send({ success: false,
            message: "Unauthenticate"});
    }
};
module.exports = authorize;