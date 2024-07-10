const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'adminkvn-12345',
    database: 'usuarios'
});

module.exports = connection;