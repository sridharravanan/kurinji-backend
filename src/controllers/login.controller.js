'use strict';
require('dotenv/config');
const Admin = require('../models/admin.model');
const Token = require('../helpers/token');
const validator = require('../helpers/validate');
const jwt = require('jsonwebtoken');
const {LOGIN} = require('./../../config/response');

let CryptoJS = require("crypto-js");
const {JWT_SECRET_KEY, JWT_EXPIRY} = process.env;

exports.login = function(req, res) {
    const validationRule = {
        "email": "required|email",
        "password": "required"
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
        res.status(412)
            .send({
                success: false,
                message: 'Validation failed',
                data: err
            });
    } else {
        const { email, password } = req.body;
        Admin.getAdminUser(email, function(err, admin) {
            if(err || admin?.length == 0){
                res.status(412)
                    .send({
                        success: false,
                        message: LOGIN?.failure?.invalidUsername,
                        data: err
                    });
            }else{
                const adminUser = Object.values(JSON.parse(JSON.stringify(admin)))[0];
                //password Decrypt
                const bytes  = CryptoJS.AES.decrypt(adminUser.password, JWT_SECRET_KEY);
                if(bytes.toString(CryptoJS.enc.Utf8) !== password){
                    res.status(412)
                    .send({
                        success: false,
                        message: LOGIN?.failure?.invalidPassword,
                        data: err
                    });

                }else{
                // Generate an access token
                const accessToken = jwt.sign({ id: adminUser.id}, JWT_SECRET_KEY,{expiresIn: JWT_EXPIRY });
                res.status(200)
                    .send({
                        success: true,
                        message: LOGIN?.success.loginSuccess,
                        data: accessToken
                    });
                }
            }           
        })
    }
});
};