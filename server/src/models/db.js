const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin-12345',
    database: 'usuarios'
});

module.exports = connection;