const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = pool; 