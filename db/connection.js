const mysql = require('mysql2');
// const employee_management_system = require('../db')

const db = mysql.createConnection({
  host: '127.0.0.1',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'MySQL#321!',
  database: 'employee_management_system',
  port: 3306
});

module.exports = db;

