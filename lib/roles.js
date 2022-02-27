const db = require('../db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { viewAllDepartments } = require('./departments');

// Get all roles

const viewAllRoles = () => {

  const sql = `select role.*, department.name AS department_name from role LEFT JOIN department ON department_id = department.id;`;

  return new Promise((resolve, reject) => {
  db.query(sql, (err, rows) => {
    if (err) {
      reject(err)
    }
    resolve(rows);
    });
  })
}

  const addRole = async () => {
    
    console.log(`
    -----------------
    Add a Role
    -----------------
    `)

    await inquirer.prompt([{
      type: 'text',
      name: 'name',
      message: 'Please enter the Role\'s name:',
      validate: nameInput_1 => {
        if (nameInput_1) {
            return true;
        } else {
            console.log('Please enter a role name!');
            return false;
        }
      }
      },
      {
        type: 'text',
        name: 'salary',
        message: 'Please enter the salary:',
        validate: nameInput_1 => {
          if (nameInput_1) {
              return true;
          } else {
              console.log('Please enter a salary!');
              return false;
          }
        }
        },
        {
          type: 'list',
          name: 'type',
          message: 'Select the action you would like to take:',
          choices: await viewAllDepartments().then(response => response.map(dept => {
            return `${dept.name}:${dept.id}`
          }))
        },
  ]).then(({name, salary, type }) => {
  const deptID = parseInt(type.split(':')[1])

    const sql = `INSERT INTO role (title, salary, department_id ) VALUES (?, ?, ?)`;
    const params = [name, salary, deptID];
  
    return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(`There was a problem adding the role ${err}`)
        reject(err)
      }
        // console.log(`Success! ${name} has been added to the department list. ${result.affectedRows} row has/have been updated.`)
        resolve(result)
      })
    })
  })
  }


  module.exports = { viewAllRoles, addRole } 
