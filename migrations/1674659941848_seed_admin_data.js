require('dotenv/config');
let CryptoJS = require("crypto-js");
const {JWT_SECRET_KEY} = process.env;

let ciphertext = CryptoJS.AES.encrypt('r0xs0ft007', JWT_SECRET_KEY).toString().trim();

const upSql = `INSERT INTO admins (id, name, email, password, created_at, updated_at)
 VALUES (NULL, 'sridhar', 'sridhar@gmail.com', '${ciphertext}', NULL, NULL);`;
    module.exports = {
    "up": upSql,
    "down":"select * from admins limit 1"
}