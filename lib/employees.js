  const db = require('../db/connection');
  const cTable = require('console.table');
  
  // Get all employees
    const viewAllEmployees = () => {
  
    const sql = `select employee.id AS id, 
    employee.first_name AS first_name, 
    employee.last_name AS last_name, 
    role.title AS job_title, 
    role.salary AS salary, 
    department.name AS department, 
    CONCAT(manager.first_name,' ', manager.last_name) AS manager from employee 
    LEFT JOIN role ON role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager on manager.id = employee.manager_id;`;

    db.query(sql, (err, rows) => {
      if (err) {
        console.log('There was an issue getting employees.')
        return;
      }
      console.table(rows);
      return
      });
    }
  
    module.exports = viewAllEmployees


