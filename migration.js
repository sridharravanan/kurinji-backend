var mysql = require('mysql');
var migration = require('mysql-migrations');
require('dotenv/config');
const {DB_HOST, DB_USER, DB_PASS, DB_NAME} = process.env;

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : DB_HOST,
  user     : DB_USER,
  password : DB_PASS,
  database : DB_NAME
});

migration.init(connection, __dirname + '/migrations');