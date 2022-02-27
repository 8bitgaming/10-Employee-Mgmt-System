const inquirer = require('inquirer');
const {viewAllRoles, addRole} = require('./lib/roles')
const { viewAllDepartments, addDepartment } = require('./lib/departments')
const { viewAllEmployees } = require('./lib/employees');
const { response } = require('express');

  const selectAction = async () => {
    console.log(`
    ==========================
    Employee Management System
    ==========================
  `)

    await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select the action you would like to take:',
      choices: ['View All Departments', 'View all Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee', 'Quit' ]
    },
  ]) .then (({type}) => {
      switch (type) {
        case 'View All Departments': viewAllDepartments().then( response => {
          console.table(response)
          selectAction()
        })
        break;
        case 'View all Roles': viewAllRoles().then( response => {
          console.table(response)
          selectAction()
        })
        break;
        case 'View All Employees': viewAllEmployees()
        break;
        case 'Add a Department': addDepartment()
        break;
        case 'Add a Role': addRole().then( response => {
          console.log(`Success!`)
          selectAction()
        })
        break;
        case 'Add an Employee': addEmployee()
        break;
        case 'Update an Employee': updateEmployee()
        break;
        case 'Quit': quitCheck()
        break;
        default: console.log('Select a Valid Option.')
      }
    })
  }

  const quitCheck = () => {
  process.exit()
  console.log('Goodbye') 
  }

selectAction()
// .then (quitCheck())