/**
 * Created by sridhar on 6/12/20.
 */
'use strict';
let dbConn = require('./../../config/db.config');

let getAdminUser = function (email, result) {
    dbConn.query("select * from admins WHERE email = ?", [email], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= {getAdminUser};